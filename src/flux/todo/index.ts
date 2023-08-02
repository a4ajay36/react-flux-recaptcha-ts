export type Todo = {
    id: string
    title: string
    description: string
}

export interface TodoStore {
    items: Todo[]
    create: (payload: Todo) => void
    findAll: () => Todo[]
    destroy: (id: string) => void
}

export interface TodoStoreEvents {
    change: () => void;
}

export type ActionTypes = "GET_TODOS" | "ADD_TODO" | "REMOVE_TODO"

export type Action = {
    type: ActionTypes
    payload: Todo | string
}

export { default as todosStore } from './store'
