import Movie from '../models/movie.schema.js';
import { BaseController } from './base.controller.js';


class MovieController extends BaseController{}

export default  new MovieController( Movie, 'genre')