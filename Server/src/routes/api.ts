import { Router } from 'express';

export const apiRouter = Router();

// Middleware específico para /api
apiRouter.use((_req, _res, next) => {
	console.log('Petición a /api');
	next();
});

// GET /api/status
apiRouter.get('/status', (_req, res) => {
	res.json({ status: 'ok' });
});

// GET /api/version
apiRouter.get('/version', (_req, res) => {
	res.json({ version: '1.0.0' });
});
