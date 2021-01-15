import React, { Component } from 'react'
import Products from './components/Products'

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = { isCart: false }

		this.switchMenu = this.switchMenu.bind(this)
	}

	switchMenu(key) {
		this.setState((prevState) => {
			return { isCart: !this.state.isCart }
		})
	}

	render() {
		return (
			<>
				<header className={this.state.isCart ? 'showCart' : ''}>
					<div className='products-a' onClick={this.switchMenu}>
						products
					</div>
					<div className='cart-a' onClick={this.switchMenu}>
						cart
					</div>
				</header>
				<main>
					<Products />
				</main>
			</>
		)
	}
}
