// Logger de peticiones
export const loggerMiddleware = (req, _res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    next();
};
// Verificar autorización
export const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        res.status(401).json({ error: 'No autorizado' });
        return;
    }
    next();
};
// Manejo de errores (4 parámetros)
export const errorHandler = (err, _req, res, _next) => {
    console.error('Error:', err.message);
    res.status(500).json({
        error: 'Error interno del servidor',
        message: err.message,
    });
};
// 404 - Ruta no encontrada
export const notFoundHandler = (_req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
};
//# sourceMappingURL=index.js.map