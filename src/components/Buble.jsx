import React, { Component } from 'react'
import styled from 'styled-components'

class Buble extends Component {
	constructor(props) {
		super()

		this.state = { justClicked: false }

		this.justClicking = this.justClicking.bind(this)
	}
	justClicking() {
		this.setState((prevState) => {
			return { justClicked: !this.state.justClicked }
		})
		setTimeout(() => {
			this.clicking()
		}, 500)
		setTimeout(() => {
			this.setState((prevState) => {
				return { justClicked: !this.state.justClicked }
			})

			this.clicking()
		}, 1000)
	}
	clicking() {
		this.props.clicking()
	}
	render() {
		return (
			<BubleDiv
				justClicked={this.state.justClicked}
				clicked={this.props.clicked}
				onClick={() => {
					this.justClicking()
				}}
			/>
		)
	}
}

const BubleDiv = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: ${(props) =>
		props.justClicked == true ? 'blue !important' : 'transparent'};

	background-color: ${(props) =>
		props.clicked === true ? 'darkblue' : 'crimson'};
	border: 2px solid #111;
	cursor: pointer;
	transition: background-color 0.3s ease-out;
`
export default Buble
