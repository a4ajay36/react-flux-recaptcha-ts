import { EventEmitter } from 'events';
import { Action, Todo } from '.';
import dispatcher from '../dispatcher';
import { ADD_TODO, REMOVE_TODO } from './actionTypes';

class TodoStore extends EventEmitter {
	todos: Todo[];

	constructor() {
		super();
		this.todos = [];
	}

	getAllTodos(): Todo[] {
		return this.todos;
	}

	create(payload: Todo) {
		this.todos.push(payload);
		this.emit('change');
	}

	remove(id: string) {
		this.todos = this.todos.filter((todo) => todo.id !== id)
		this.emit('change');
	}

	handleActions(action: Action) {
		switch (action.type) {
			case ADD_TODO:
				this.create(action.payload as Todo);
				break;
			case REMOVE_TODO:
				this.remove(action.payload as string)
				break;
			default:
				// Do nothing for other actions
				break;
		}
	}
}

const todoStore = new TodoStore();
// @ts-ignore
dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;
