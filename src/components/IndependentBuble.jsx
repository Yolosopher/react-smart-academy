import React, { Component } from 'react'
import Buble from './Buble'

class IndependentBuble extends Component {
	constructor(props) {
		super(props)
		this.state = { clicked: this.props.clicked }
	}
	clickingDiff(diff) {
		this.setState((prev) => {
			return { clicked: !this.state.clicked }
		})
		setTimeout(() => {
			this.setState((prev) => {
				return { clicked: !this.state.clicked }
			})
		}, 500)
		this.props.clicking()
	}
	render() {
		return (
			<div
				style={{
					display: 'flex',
					gap: '20px',
				}}
			>
				<Buble
					clicked={this.state.clicked}
					clicking={() => {
						this.clickingDiff(this.props.diff)
					}}
				/>
				<Buble
					clicked={this.state.clicked}
					clicking={() => {
						this.clickingDiff(this.props.diff)
					}}
				/>
			</div>
		)
	}
}

export default IndependentBuble
