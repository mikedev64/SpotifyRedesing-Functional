import express, { type Express } from 'express';
import { loggerMiddleware, errorHandler, notFoundHandler } from './middlewares/index.js';
import { apiRouter } from './routes/api.js';
import { usersRouter } from './routes/users.js';
import { adminRouter } from './routes/admin.js';

const app: Express = express();
const PORT = process.env.PORT ?? 3000;

// ============================================
// MIDDLEWARES GLOBALES
// ============================================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(loggerMiddleware);

// ============================================
// RUTAS
// ============================================
app.get('/', (_req, res) => {
	res.json({ message: 'Hola mundo!' });
});

app.get('/search', (req, res) => {
	const { q, limit } = req.query;
	res.json({ query: q ?? '', limit: limit ?? 10 });
});

app.use('/users', usersRouter);
app.use('/admin', adminRouter);
app.use('/api', apiRouter);

// Ruta para probar errores
app.get('/error', () => {
	throw new Error('Error de prueba!');
});

// ============================================
// MANEJO DE ERRORES (siempre al final)
// ============================================
app.use(errorHandler);
app.use(notFoundHandler);

// ============================================
// INICIAR SERVIDOR
// ============================================
app.listen(PORT, () => {
	console.log(`🚀 Server: http://localhost:${PORT}`);
	console.log('');
	console.log('Rutas disponibles:');
	console.log('  GET  /                  - Hola mundo');
	console.log('  GET  /search?q=texto    - Query params');
	console.log('  GET  /users/:id         - Parámetro de ruta');
	console.log('  POST /users             - Crear (con body)');
	console.log('  PUT  /users/:id         - Actualizar');
	console.log('  DELETE /users/:id       - Eliminar');
	console.log('  GET  /admin/dashboard   - Requiere Authorization header');
	console.log('  GET  /api/status        - Router modular');
	console.log('  GET  /api/version       - Router modular');
	console.log('  GET  /error             - Probar manejo de errores');
});
