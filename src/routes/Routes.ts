import { Router } from 'express';

import { CreateUserController } from '../controllers/user/CreateUserController'
import { AuthUserController } from '../controllers/user/AuthUserController'
import { DetailuserController } from '../controllers/user/DetailUserController'

import { isAuthenticated } from '../middlewares/isAuthenticated'
import { CreateCategoryService } from '../services/category/CreateCategoryService';
import { CreateCategoryController } from '../controllers/category/CreateCategoryController';

const router = Router();

//-- ROTAS USER --
router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', isAuthenticated,  new DetailuserController().handle )

// -- ROTAS CATEGORY

router.post('/category', isAuthenticated, new CreateCategoryController().handle)

export { router }; 