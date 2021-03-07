import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router';

const Register = (props) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
    
    let history = useHistory()

	const submitHandler = async (e) => {
		e.preventDefault()
		let user = {
			email: e.target.emaila.value,
			password: e.target.passworda.value,
		}
		let error
		try {
			const response = await axios
				.post('http://localhost:7000/users/create', user)
				.catch((err) => {
					error = err.response.data
				})
			console.log(response)
		} finally {
			if (error) {
				console.log(error)
			} else {
                history.push('/')
			}
		}
	}

	return (
		<main className='homeMain container'>
			<form
				className='homeMain__form'
				onSubmit={(e) => {
					submitHandler(e)
				}}
			>
				<label htmlFor='emaila'>Email:</label>
				<div className='input-div'>
					<input
						value={email}
						type='text'
						name='emaila'
						autoComplete='off'
						id='emaila'
						onChange={(e) => {
							setEmail(e.target.value)
						}}
					/>
				</div>
				<label htmlFor='passworda'>Password:</label>
				<div className='input-div'>
					<input
						value={password}
						type='password'
						name='passworda'
						autoComplete='off'
						id='passworda'
						onChange={(e) => {
							setPassword(e.target.value)
						}}
					/>
				</div>
				<input
					className='homeMain__form__submitbtn'
					type='submit'
					value='Sign Up'
				/>
			</form>
		</main>
	)
}

export default Register
