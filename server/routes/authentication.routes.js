import { Router } from 'express';
import * as AuthController from '../controllers/auth.controller';
const router = new Router();

router.route('/accounts').get(AuthController.getAllAccounts)
router.route('/create').post(AuthController.createAccount);

export default router;