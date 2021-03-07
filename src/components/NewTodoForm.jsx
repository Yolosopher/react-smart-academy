import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import DateTimePicker from 'react-datetime-picker'
import axios from 'axios'
import { LoginContext } from '../context/LoginContext'

const NewTodoForm = (props) => {
	const [activity, setActivity] = useState('')
	const [date, setDate] = useState(new Date())
	let { loginInfo, setLoginInfo } = useContext(LoginContext)
	let token = localStorage.getItem('token')

	const submitHandler = async (e) => {
		e.preventDefault()
		const response = await axios
			.post(
				`http://localhost:7000/todos/create/${loginInfo.id}`,
				{ activity, date },
				{
					headers: {
						'x-access-token': token,
					},
				}
			)
			.catch((err) => {
				console.log(err.data)
			})
		console.log(response.data)
		props.updateTodos(response.data)
		setActivity('')
	}
	return (
		<Form
			className='todoForm'
			onSubmit={submitHandler}
			toggled={props.toggled}
		>
			<label htmlFor='activity'>Activity: </label>
			<div className='input-div'>
				<input
					value={activity}
					required
					type='text'
					name='activity'
					autoComplete='off'
					id='activity'
					onChange={(e) => {
						setActivity(e.target.value)
					}}
				/>
			</div>
			<label htmlFor='date'>Deadline: </label>
			<div className='datepicker__container'>
				<DateTimePicker
					name='date'
					onChange={setDate}
					value={date}
					clearIcon={null}
					required
				/>
			</div>

			<input
				className='homeMain__form__submitbtn'
				type='submit'
				value='Add New Todo'
			/>
		</Form>
	)
}

const Form = styled.form`
	position: absolute;
	background-color: #2f3e46;
	z-index: 3;
	border-radius: 15px;
	right: 30px;
	color: #cad2c5;
	padding: 20px;
	top: 0;
	width: 50%;
	top: ${(props) => (props.toggled ? 'calc(100% - 20px)' : '-100%')};
	transform: translateY(-100%);
	transition: top 0.4s ease;
	.datepicker,
	.input-div > input,
	.homeMain__form__submitbtn {
		height: 50px;
		width: 100%;
		margin: 0 auto;
		font-size: 20px;
		line-height: 22px;
		background-color: #cad2c5;
		color: #2f3e46 !important;
		display: block;
		padding: 0 20px;
		margin-bottom: 20px;
		border-radius: 15px;
		border: none;
	}
	.datepicker {
		border-radius: 15px;
		&__container {
			width: 100%;
			margin-bottom: 20px;
		}
	}
	select {
		color: #52796f;
	}
	label {
		margin-bottom: 10px;
	}
`

export default NewTodoForm
