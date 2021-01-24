import React from 'react'
import styled from 'styled-components'
import Img from './Img'
import Like from './Like'

export default function Post(props) {
	return (
		<Li className='li' key={props.id}>
			<div className='li__top'>
				<Img
					style={{ objectFit: 'cover' }}
					src={props.userImage}
					alt='post-image'
				/>
				<div className='li__top__NmTm'>
					<h2>{props.user}</h2>
					<p>{props.date}</p>
				</div>
			</div>

			<p className='realText'>{props.text}</p>
			{props.image && (
				<img className='realImage' src={props.image} alt='' />
			)}
			<div className='li__realbottom'>
				<div
					className='li__bottom'
					onClick={() => {
						props.like(props.id)
					}}
				>
					<Like />
					{props.isLiked}
				</div>
				<button
					type='button'
					onClick={() => {
						props.delete(props.id)
					}}
					className='deleteBtn'
				>
					remove post
				</button>
			</div>
		</Li>
	)
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
