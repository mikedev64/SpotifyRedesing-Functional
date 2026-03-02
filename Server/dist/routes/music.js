import { Router } from 'express';
export const router = Router();
// GET /api/music/tracks - Listar canciones
router.get('/tracks', (_req, res) => {
    res.json({ tracks: [] });
});
// GET /api/music/tracks/:id - Obtener canción por ID
router.get('/tracks/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        id,
        title: 'Canción Demo',
        artist: 'Artista Demo',
        album: 'Álbum Demo',
        duration: 0,
        url: `/music/tracks/${id}/stream`,
    });
});
// GET /api/music/tracks/:id/stream - Stream de la canción
router.get('/tracks/:id/stream', (req, res) => {
    const { id } = req.params;
    // TODO: Implementar streaming de audio
    res.status(501).json({
        error: 'Streaming not implemented',
        trackId: id,
    });
});
// GET /api/music/albums - Listar álbumes
router.get('/albums', (_req, res) => {
    res.json({ albums: [] });
});
// GET /api/music/albums/:id - Obtener álbum por ID
router.get('/albums/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        id,
        title: 'Álbum Demo',
        artist: 'Artista Demo',
        releaseDate: null,
        tracks: [],
    });
});
// GET /api/music/search - Búsqueda de música
router.get('/search', (req, res) => {
    const { q, type } = req.query;
    res.json({
        query: q ?? '',
        type: type ?? 'all',
        results: {
            tracks: [],
            albums: [],
            artists: [],
        },
    });
});
//# sourceMappingURL=music.js.map