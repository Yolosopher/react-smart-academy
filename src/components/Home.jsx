import React, { useContext, useState } from 'react'
import axios from 'axios'
import { LoginContext } from '../context/LoginContext'
import { css } from '@emotion/core'
import CircleLoader from 'react-spinners/CircleLoader'

const override = css`
	display: block;
	margin: 0 auto;
	border-color: #2f3e46;
`

const Home = (props) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const sendtoken = () => {
		props.func([])
	}


	const { loginInfo, setLoginInfo } = useContext(LoginContext)

	const submitHandler = async (e) => {
		e.preventDefault()
		let user = {
			email: e.target.emaila.value,
			password: e.target.passworda.value,
		}
		let error, content
		try {
			const response = await axios
				.post('http://localhost:7000/users/login', user)
				.catch((err) => {
					error = err.response.data
				})
			if (response) {
				content = response.data
			}
		} finally {
			if (error) {
				console.log(error)
			} else {
				localStorage.setItem('token', content.token)
				sendtoken()
			}
		}
	}
	
	return (
		<main className='homeMain container'>
			{props.loading ? (
				<div className="loader-container">
					<CircleLoader color="#cad2c5" css={override} size={150} />
				</div>
			) : loginInfo.status ? (
				<div className='homeMain__main'>
					<h2>Welcome to Todo App!!! 😁</h2>
				</div>
			) : (
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
						value='Sing In'
					/>
				</form>
			)}
		</main>
	)
}

export default Home
