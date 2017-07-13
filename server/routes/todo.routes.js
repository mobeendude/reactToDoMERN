import { Router } from 'express';
import * as TodoController from '../controllers/todo.controller';
const router = new Router();

// Get all Todos
router.route('/').get(TodoController.getTodos);

// Add a new Todo
router.route('/').post(TodoController.addTodo);

// Delete a todo by cuid
router.route('/delete/completed').delete(TodoController.deleteCompletedTodo);

// complete a todo by cuid
router.route('/:cuid/complete').post(TodoController.completeTodo);

export default router;
