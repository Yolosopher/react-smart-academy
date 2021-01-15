import React, { Component } from 'react'

export default class Cart extends Component {
	constructor(props) {
		super(props)
		this.products = props.products

		this.delete = this.delete.bind(this)
	}
	delete(key) {
		this.props.delete(key)
	}
	render() {
		let filtered = this.products.filter((product) => product.added)
		let filteredReady = filtered

		return (
			<div className='cart'>
				<h1>Cart</h1>
				<ul className='cart__content'>
					{filteredReady.map((product) => {
						return (
							<li key={product.key}>
                                <div>
                                    <h2>{product.title}</h2>
                                    <p>{product.description}</p>
                                </div>
								<button
									onClick={() => {
										this.delete(product.key)
									}}
								>
									Remove
								</button>
							</li>
						)
					})}
				</ul>
			</div>
		)
	}
}
