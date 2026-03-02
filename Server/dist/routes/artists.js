import { Router } from 'express';
export const router = Router();
// GET /api/artists - Listar artistas
router.get('/', (_req, res) => {
    res.json({ artists: [] });
});
// GET /api/artists/:id - Obtener artista por ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        id,
        name: 'Artista Demo',
        url: `/artists/${id}`,
        followers: 0,
        monthlyListeners: 0,
    });
});
// GET /api/artists/:id/top-tracks - Canciones más escuchadas
router.get('/:id/top-tracks', (req, res) => {
    const { id } = req.params;
    res.json({
        artistId: id,
        tracks: [],
    });
});
// GET /api/artists/:id/discography - Discografía completa
router.get('/:id/discography', (req, res) => {
    const { id } = req.params;
    res.json({
        artistId: id,
        albums: [],
        singles: [],
        compilations: [],
    });
});
// GET /api/artists/:id/albums - Álbumes del artista
router.get('/:id/albums', (req, res) => {
    const { id } = req.params;
    res.json({
        artistId: id,
        albums: [],
    });
});
//# sourceMappingURL=artists.js.map