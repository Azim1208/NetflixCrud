import  { Router } from 'express';
import Controller from '../controllers/genre.controller.js';
import { validator } from '../middlewares/validation-handle.js';
import genreValid from '../validators/genre.validation.js';


const router = Router();

router
    .post('/',validator(genreValid.create), Controller.create)
    .get('/',Controller.findAll)
    .get('/:id',Controller.findOne)
    .patch('/:id', validator(genreValid.update), Controller.update)
    .delete('/id', Controller.remove)



export default router