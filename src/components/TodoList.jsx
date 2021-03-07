import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { LoginContext } from '../context/LoginContext'
import axios from 'axios'
import styled from 'styled-components'
import NewTodoForm from './NewTodoForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const TodoList = () => {
	const history = useHistory()
	const [todos, setTodos] = useState([])
	const [formToggle, setFormToggle] = useState(false)

	const { loginInfo, setLoginInfo } = useContext(LoginContext)
	if (!loginInfo.id) {
		history.push('/')
	}
	let token = localStorage.getItem('token')

	useEffect(() => {
		let error, content
		const getTodos = async () => {
			const response = await axios
				.get(`http://localhost:7000/todos/${loginInfo.id}`, {
					headers: {
						'x-access-token': token,
					},
				})
				.catch((err) => {
					error = err.response.data
				})
			if (response) {
				content = response.data.todos
				setTodos(content)
			}
		}

		try {
			getTodos()
		} catch (error) {
			console.log(error.message)
		}
	}, [loginInfo])

	const removeHandler = async (todoid) => {
		const response = await axios
			.get(
				`http://localhost:7000/todos/delete/${loginInfo.id}/${todoid}`,
				{
					headers: {
						'x-access-token': token,
					},
				}
			)
			.catch((err) => {
				console.log(err.response.data)
			})
		console.log(response.data.todos)
		setTodos(response.data.todos)
	}

	return (
		<>
			<div
				className='addTodo'
				onClick={() => {
					setFormToggle((prevState) => !prevState)
				}}
			>
				New Todo
			</div>
			<TodoListContainer className='todoList'>
				<NewTodoForm updateTodos={setTodos} toggled={formToggle} />
				<ul className='todoList__ul'>
					{todos &&
						todos
							.sort((a, b) => b.date - a.date)
							.reverse()
							.filter((td) => td.activity)
							.map((todo) => (
								<li className='todoList__li' key={todo._id}>
									<h2>Activity:</h2>
									<p>{todo.activity}</p>
									<h2>Deadline:</h2>
									<time>
										{new Date(todo.date).toLocaleString()}
									</time>
									<div
										className='removeBtn'
										key={todo._id}
										onClick={() => {
											removeHandler(`${todo._id}`)
										}}
									>
										<FontAwesomeIcon icon={faTrash} />
									</div>
								</li>
							))}
				</ul>
			</TodoListContainer>
		</>
	)
}

const TodoListContainer = styled.div`
	max-width: 1200px;
	width: 100%;
	margin: 0 auto;
	padding: 20px;
	padding-top: 50px;
	position: relative;
	overflow: hidden;
	min-height: calc(100vh - 120px);
	ul {
		display: grid;
		grid-gap: 10px;
	}
	li {
		border: 2px solid #52796f;
		padding: 20px;
		border-radius: 15px;
		color: #2f3e46;
		display: grid;
		grid-template-columns: 140px 1fr;
		align-items: center;
		grid-gap: 20px 0;
		position: relative;
		h2 {
			font-size: 26px;
			display: inline-block;
			line-height: 26px;
		}
		p {
			font-size: 18px;
			display: inline-block;
			line-height: 21px;
		}
		time {
			font-style: italic;
			display: inline-block;
		}
		.removeBtn {
			position: absolute;
			display: flex;
			justify-content: center;
			align-items: center;
			right: 20px;
			top: 50%;
			transform: translateY(-50%);
			width: 20px;
			height: 20px;
			cursor: pointer;
			svg {
				font-size: 30px;
				line-height: 1;
			}
		}
	}
`

export default TodoList
