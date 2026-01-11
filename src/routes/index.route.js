import { Router } from "express";

import genreRouter from './genre.route.js';
import movieRouter from './movie.route.js'


const router = Router();

router
    .use('/genre', genreRouter)

export default router;