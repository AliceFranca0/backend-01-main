import { Router } from 'express';

import * as ApiController from '../controllers/apiController';

import * as AlunoController from '../controllers/AlunoController';

const router = Router();

router.get('/ping', ApiController.ping)
router.get('/listarTodosAlunos', AlunoController.listarAlunos);
router.post('/cadastrarAluno', AlunoController.cadastrarAluno);
router

export default router;


