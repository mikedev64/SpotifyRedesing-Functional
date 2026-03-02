import { Router } from 'express';
export const usersRouter = Router();
// GET /users/:id - Parámetro de ruta
usersRouter.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ userId: id });
});
// POST /users - Crear con body
usersRouter.post('/', (req, res) => {
    const body = req.body;
    res.status(201).json({
        message: 'Usuario creado',
        data: body,
    });
});
// PUT /users/:id - Actualizar
usersRouter.put('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    res.json({
        message: `Usuario ${id} actualizado`,
        data: body,
    });
});
// DELETE /users/:id - Eliminar
usersRouter.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Usuario ${id} eliminado` });
});
//# sourceMappingURL=users.js.map