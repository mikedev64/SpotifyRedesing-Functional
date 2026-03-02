import { Router } from 'express';
export const router = Router();
// POST /api/auth/register - Crear cuenta
router.post('/register', (req, res) => {
    const { email, password, name } = req.body;
    if (!email || !password || !name) {
        res.status(400).json({ error: 'Missing required fields' });
        return;
    }
    // TODO: Implementar registro real
    res.status(201).json({
        message: 'User created',
        user: {
            id: 'demo-id',
            email,
            name,
        },
    });
});
// POST /api/auth/login - Iniciar sesión
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ error: 'Missing required fields' });
        return;
    }
    // TODO: Implementar login real
    res.json({
        message: 'Login successful',
        token: 'demo-token',
        user: {
            id: 'demo-id',
            email,
            name: 'Demo User',
        },
    });
});
// POST /api/auth/logout - Cerrar sesión
router.post('/logout', (_req, res) => {
    // TODO: Implementar logout real (invalidar token)
    res.json({ message: 'Logout successful' });
});
// DELETE /api/auth/account - Eliminar cuenta
router.delete('/account', (_req, res) => {
    // TODO: Implementar eliminación de cuenta
    res.json({ message: 'Account deleted' });
});
// GET /api/auth/me - Obtener usuario actual
router.get('/me', (_req, res) => {
    // TODO: Implementar verificación de token
    res.json({
        id: 'demo-id',
        email: 'demo@example.com',
        name: 'Demo User',
    });
});
//# sourceMappingURL=auth.js.map