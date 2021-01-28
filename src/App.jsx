import React, { Component } from 'react'
import styled from 'styled-components'
import Buble from './components/Buble'
import IndependentBuble from './components/IndependentBuble'
import SeparateBubles from './components/SeparateBubles'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = { clicked: false }
		this.different = true
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		this.setState((prev) => {
			return { clicked: !this.state.clicked }
		})
		setTimeout(() => {
			this.setState((prev) => {
				return { clicked: !this.state.clicked }
			})
		}, 500)
	}
	render() {
		return (
			<Container column>
				<IndependentBuble
					diff={this.different}
					clicked={this.state.clicked}
					clicking={this.handleClick}
				/>
				<Container
					style={{
						alingItems: 'flex-start',
					}}
				>
					<Buble
						clicked={this.state.clicked}
						clicking={this.handleClick}
					/>
					<SeparateBubles
						clicked={this.state.clicked}
						clicking={this.handleClick}
					/>
					<SeparateBubles
						clicked={this.state.clicked}
						clicking={this.handleClick}
					/>
				</Container>
			</Container>
		)
	}
}

const Container = styled.div`
	display: flex;
	gap: 20px;
	justify-content: center;
	align-items: ${(props) => (props.column ? 'center' : 'flex-start')};
	flex-direction: ${(props) => (props.column ? 'column' : 'row')};
`
export default App
