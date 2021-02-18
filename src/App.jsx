import React, { Component } from 'react'
import { Formik } from 'formik'

const Form = (props) => {
	console.log('formik props => ', props)
	const { values, errors, handleChange, handleSubmit } = props
	return (
		<Formik onSubmit={handleSubmit}>
			<label htmlFor='email'>
				Email:
				<input type='email' name='email' id='email' />
			</label>
			<label htmlFor='text'>
				Text:
				<input type='text' name='text' id='text' />
			</label>
			<button type="submit">Submit</button>
		</Formik>
	)
}

export default class App extends Form() {
	constructor(props) {
		super(props)
	}

	handleSubmit(e) {
		e.preventDefault()
		console.log(e.target.email)
		console.log(e.target.text)
	}
	render() {
		return (
			<>
				<Form />
			</>
		)
	}
}
