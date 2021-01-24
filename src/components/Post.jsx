import React, { Component } from 'react'
import styled from 'styled-components'
import Img from './Img'
import Like from './Like'

class Post extends Component {
	constructor(props) {
		super(props)
		this.props = props
		this.id = props.key
		this.delete = this.delete.bind(this)
		this.like = this.like.bind(this)
	}

	delete(key) {
		this.props.delete(this.id)
	}
	like(key) {
		this.props.like(this.id)
	}
	render() {
		return (
			<Li className='li' id={this.id}>
				<div className='li__top'>
					<Img
						style={{ objectFit: 'cover' }}
						src={this.props.userImage}
						alt='post-image'
					/>
					<div className='li__top__NmTm'>
						<h2>{this.props.user}</h2>
						<p>{this.props.date}</p>
					</div>
				</div>

				<p className='realText'>{this.props.text}</p>
				{this.props.image && (
					<img className='realImage' src={this.props.image} alt='' />
				)}
				<div className='li__realbottom'>
					<div
						className='li__bottom'
						onClick={() => {
							this.like(this.id)
						}}
					>
						<Like />
						{this.props.isLiked}
					</div>
					<button
						type='button'
						onClick={() => {
							this.delete(this.id)
						}}
						className='deleteBtn'
					>
						remove post
					</button>
				</div>
			</Li>
		)
	}
}

const Li = styled.li`
	&.li {
		padding: 30px 20px;
		border: 2px solid #ecebf1;
		background-color: #fff;
		margin-bottom: 30px;
		border-radius: 4px;
		svg {
			width: 33px;
			height: 33px;
			margin-right: 20px;
		}
		.li__top {
			display: flex;
			align-items: center;
			font-size: 80%;
			margin-bottom: 20px;
			h2 {
				margin-bottom: 5px;
			}
		}
		.li__bottom {
			display: flex;
			align-items: center;
			svg {
				cursor: pointer;
			}
		}
		.realText {
			margin-bottom: 20px;
		}
		.realImage {
			height: 200px;
			border-radius: 6px;
			object-fit: cover;
			width: calc(1 / 3 * 100%);
			margin-bottom: 20px;
		}
	}
`
export default Post
