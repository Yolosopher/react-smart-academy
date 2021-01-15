import React, { Component } from 'react'

class ProductItem extends Component {
	constructor(props) {
		super(props)
        this.products = props.products
        
        this.buy = this.buy.bind(this)
    }
    
    buy(key) {
        this.props.buy(key)
    }

	render() {
		return (
            <section className="products">
                <h1>Products</h1>
                <ul className="products__ul">
                    {this.products.map((product) => {
                        return (
                            <li
                                key={product.key}
                                className='li'
                            >
                                <div className='li__top'>
                                    <div className="li__top__texts">
                                        <h2>{product.title}</h2>
                                        <p>{product.description}</p>
                                    </div>    
                                    <div className="buy" onClick={() => {
                                        this.buy(product.key)
                                    }}>BUY</div>
                                </div>
                                
                                <div className='li__bottom'>
                                    <div className='li__bottom__gender'>
                                        <span className='for'>For: </span>
                                        <span>{product.gender}</span>
                                    </div>
                                    <div className='li__bottom__price'>
                                        <span className='price'>Price: </span>
                                        <span>{product.price}</span>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </section>
		)
	}
}

export default ProductItem
