import React, { Component } from 'react'
import Buble from './Buble'

class SeparateBubles extends Component {
    
	render() {
		return (
			<div style={{ display: 'flex', gap: '20px' }}>
				<Buble
					clicked={this.props.clicked}
					clicking={() => {
						this.props.clicking()
					}}
				/>
				<Buble
					clicked={this.props.clicked}
					clicking={() => {
						this.props.clicking()
					}}
				/>
			</div>
		)
	}
}

export default SeparateBubles
