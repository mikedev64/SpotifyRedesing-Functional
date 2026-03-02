import { Router } from 'express';
import { router as usersRouter } from './users.js';
import { router as artistsRouter } from './artists.js';
import { router as musicRouter } from './music.js';
import { router as authRouter } from './auth.js';
export const router = Router();
router.use('/users', usersRouter);
router.use('/artists', artistsRouter);
router.use('/music', musicRouter);
router.use('/auth', authRouter);
// Info de la API
router.get('/', (_req, res) => {
    res.json({
        name: 'Spotify Clone API',
        version: '1.0.0',
        endpoints: {
            users: '/api/users',
            artists: '/api/artists',
            music: '/api/music',
            auth: '/api/auth',
        },
    });
});
//# sourceMappingURL=index.js.map