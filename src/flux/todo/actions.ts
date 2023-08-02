import { Todo } from ".";
import dispatcher from "../dispatcher";
import { ADD_TODO, GET_TODOS, REMOVE_TODO } from "./actionTypes";

export const getTodos = () => {
    dispatcher.dispatch({
        actionTypes: GET_TODOS,
        toods: [],
    });
}

export function addTodo(payload: Todo) {
    dispatcher.dispatch({
        type: ADD_TODO,
        payload,
    });
}

export function removeTodo(id: string) {
    dispatcher.dispatch({
        type: REMOVE_TODO,
        payload: id,
    });
}
