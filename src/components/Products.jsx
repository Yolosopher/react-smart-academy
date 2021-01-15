import React, { Component } from 'react'
import Cart from './Cart';
import ProductItem from './ProductItem'
import './products.sass'

class Products extends Component {
	constructor() {
		super()
		this.state = {
			products: [
				{
					key: 1,
					title: 'Ocean Blue Shirt',
					description:
						'Ocean blue cotton shirt with a narrow collar and buttons down the front and long sleeves. Comfortable fit and tiled kalidoscope patterns.',
					gender: 'men',
					price: 50,
					added: false,
				},
				{
					key: 2,
					title: 'Classic Varsity Top',
					description:
						'Womens casual varsity top, This grey and black buttoned top is a sport-inspired piece complete with an embroidered letter.',
					gender: 'women',
					price: 70,
					added: false,
				},
				{
					key: 3,
					title: 'Yellow Wool Jumper',
					description:
						'Stylish sleeveless white top with a floral pattern.',
					gender: 'women',
					price: 80,
					added: false,
				},
				{
					key: 4,
					title: 'Floral White Top',
					description:
						'Knitted jumper in a soft wool blend with low dropped shoulders and wide sleeves and think cuffs. Perfect for keeping warm during Fall.	',
					gender: 'women',
					price: 30,
					added: false,
				},
				{
					key: 5,
					title: 'Navy Sports Jacket',
					description:
						"Long-sleeved navy waterproof jacket in thin, polyester fabric with a soft mesh inside. The durable water-repellent finish means you'll be kept comfortable and protected when out in all weathers.",
					gender: 'men',
					price: 85,
					added: false,
				},
			]
		}
		this.handleBuy = this.handleBuy.bind(this)
		this.handleDelete = this.handleDelete.bind(this)
	}

	handleBuy(key) {
		let filteredState = this.state.products.map((prd) => {
			if (prd.key === key) {
				prd.added = true
			}

			return prd
		})
		filteredState = [...filteredState]

		this.setState(prevState => {
			return {
				products: filteredState
			}
		})
	}
    handleDelete(key) {
        let filteredState = this.state.products.map((prd) => {
			if (prd.key === key) {
				prd.added = false
			}
			return prd
		})
		filteredState = [...filteredState]

		this.setState(prevState => {
			return {
				products: filteredState
			}
		})
    }

	render() {
		return (
			<>
				<div className="content-container">
					<ProductItem buy={this.handleBuy} products={this.state.products} />
					<Cart delete={this.handleDelete} products={this.state.products} />
				</div>
			</>
		)
	}
}

export default Products
