import { Container, Grid } from '@mui/material';
import React from 'react';
import CreateTodoItem from './components/CreateTodoItem';
import TodoList from './components/TodoList';

const App: React.FC = () => {
	return (
		<Container maxWidth="lg">
			<h1>Todo App</h1>
			<Grid item xs={6}>
				<CreateTodoItem />
				{/* <RecaptchaV3 /> */}
			</Grid>
			<Grid item xs={6}>
				<TodoList />
			</Grid>
		</Container>
	);
};

export default App;
