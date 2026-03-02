import { Router } from 'express';
import { authMiddleware } from '../middlewares/index.js';
export const adminRouter = Router();
// Aplicar middleware de auth a TODAS las rutas de este router
adminRouter.use(authMiddleware);
// GET /admin/dashboard
adminRouter.get('/dashboard', (_req, res) => {
    res.json({ message: 'Panel de administración' });
});
//# sourceMappingURL=admin.js.map