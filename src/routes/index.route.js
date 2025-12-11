import { Router } from "express";

import genreRouter from './genre.route.js';
import movieRouter from './movie.route.js';
import adminRouter from './admin.route.js'; 

const router = Router();

router
    .use('/admin', adminRouter)
    .use('/genre', genreRouter)
    .use('/movie', movieRouter)

export default router;