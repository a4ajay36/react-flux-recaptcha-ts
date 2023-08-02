import { Divider, List } from '@mui/material';
import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { Todo } from '../flux/todo';
import todoStore from '../flux/todo/store';
import TodoItem from './TodoItem';

const TodoList: React.FC = (): JSX.Element => {
    const [todos, setTodos] = useState<Todo[]>(todoStore.getAllTodos());

    const handleStoreChange = useCallback(() => {
        const list = todoStore.getAllTodos()
        console.log(list);
        setTodos(list);
    }, [todoStore.getAllTodos()])

    useEffect(() => {
        todoStore.on('change', handleStoreChange);
        return () => {
            todoStore.removeListener('change', handleStoreChange);
        };
    }, [handleStoreChange]);

    return (
        <List>
            {todos.map((todo, idx) => (
                <Fragment key={todo.id}>
                    <TodoItem
                        todo={todo}
                    />
                    {idx + 1 < todos.length && (
                        <Divider />
                    )}
                </Fragment>
            ))}
        </List>
    );
}

export default TodoList;
