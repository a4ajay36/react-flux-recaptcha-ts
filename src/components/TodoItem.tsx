import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import { Todo } from '../flux/todo';
import { removeTodo } from '../flux/todo/actions';

type TodoItemProps = {
    todo: Todo
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }): JSX.Element => {
    const { id, title, description } = todo

    const handleDeleteTodo = () => {
        removeTodo(id)
    };

    return (
        <ListItem>
            <ListItemText primary={title} secondary={description} />
            <IconButton onClick={handleDeleteTodo}>
                <DeleteIcon />
            </IconButton>
        </ListItem>
    );
};

export default TodoItem;
