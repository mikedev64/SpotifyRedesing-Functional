import type { Request, Response, NextFunction } from 'express';

// Logger de peticiones
export const loggerMiddleware = (req: Request, _res: Response, next: NextFunction): void => {
	console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
	next();
};

// Verificar autorización
export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
	const token = req.headers.authorization;

	if (!token) {
		res.status(401).json({ error: 'No autorizado' });
		return;
	}

	next();
};

// Manejo de errores (4 parámetros)
export const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction): void => {
	console.error('Error:', err.message);
	res.status(500).json({
		error: 'Error interno del servidor',
		message: err.message,
	});
};

// 404 - Ruta no encontrada
export const notFoundHandler = (_req: Request, res: Response): void => {
	res.status(404).json({ error: 'Ruta no encontrada' });
};
