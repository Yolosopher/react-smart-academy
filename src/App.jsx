import React, { Component } from 'react'
import MainUser from './components/helpers/MainUser'
// import Posts from './components/helpers/Posts'
import styled from 'styled-components'
// import FormatAMPM from './components/helpers/FormatAMPM'
import Wallpaper from './components/Wallpaper'
import AddFriend from './components/AddFriend'
import Post from './components/Post'
import Img from './components/Img'

export default class App extends Component {
	constructor(props) {
		super(props)
		let localPosts = JSON.parse(localStorage.getItem('posts'))
		this.state = {
			posts: localPosts ? localPosts : [],
		}
		this.user = MainUser

		this.handleSubmit = this.handleSubmit.bind(this)
		this.liking = this.liking.bind(this)
		this.deleting = this.deleting.bind(this)
	}
	convertBase64(file) {
		return new Promise((resolve, reject) => {
			let reader = new FileReader()

			reader.onload = () => {
				resolve(reader.result)
			}

			reader.onerror = reject

			reader.readAsDataURL(file)
		})
		// fileReader.onerror = (err) => err
	}
	async handleSubmit(event) {
		const text = event.target.postItself.value
		if (text === '') return

		let image
		image = event.target.photo.files[0]
		if (image) {
			image = await this.convertBase64(image)
		}

		let date = Date.now()
		let realDate = new Date().toLocaleString([], {
			month: '2-digit',
			day: '2-digit',
			hour: '2-digit',
			minute: '2-digit',
		})

		let newPost = {
			id: `${date}`,
			user: `${this.user.firstName} ${this.user.lastName}`,
			date: realDate,
			text: text,
			image: image ? `${image}` : null,
			userImage: `${this.user.image}`,
			isLiked: 0,
		}

		event.target.postItself.value = ''

		this.setState((prevState) => {
			localStorage.setItem(
				'posts',
				JSON.stringify([...prevState.posts, newPost])
			)

			return {
				posts: [...prevState.posts, newPost],
			}
		})
	}

	liking(key) {
		// let list = [...this.state.posts].map((post) => {
		// 	if (post.key === key) {
		// 		post.isLiked += 1
		// 	}
		// 	return post
		// })
		let list = []
		for (let i = 0; i < this.state.posts.length; i++) {
			if (this.state.posts[i].id === key) {
				this.state.posts[i] = +this.state.posts[i] + 1
			}
			list.push(this.state.posts[i])
		}

		this.setState(() => {
			localStorage.setItem('posts', JSON.stringify(list))
			return {
				posts: list,
			}
		})
	}

	deleting(key) {
		// let list = [...this.state.posts].filter(post => {
		// 	if (post.key !== key) {
		// 		return post
		// 	}
		// })
		let list = []
		for (let i = 0; i < this.state.posts.length; i++) {
			if (this.state.posts[i].id !== key) {
				list.push(this.state.posts[i])
			}
		}
		console.log(list)
		this.setState(() => {
			localStorage.setItem('posts', JSON.stringify(list))
			return {
				posts: list,
			}
		})
	}

	render() {
		return (
			<Main style={{ padding: '35px' }}>
				<form
					method='post'
					encType='multipart/form-data'
					className='form'
					onSubmit={(e) => {
						e.preventDefault()
						this.handleSubmit(e)
					}}
				>
					<div className='form__top'>
						<Img src={this.user.image} alt='profile-pic' />
						<Input
							id='form__text'
							type='text'
							name='postItself'
							placeholder={`What's on your mind, ${this.user.firstName}`}
						/>
					</div>
					<div className='form__bottom'>
						<label htmlFor='photo'>
							<input
								type='file'
								name='photo'
								id='photo'
								className='form__bottom__photo'
							/>
							<Wallpaper />
							Photo/Video
						</label>
						<div className='add-friend'>
							<AddFriend />
							Tag Friends
						</div>
						<div className='feeling-activity'>
							😀 Feeling/Activity
						</div>
					</div>
				</form>
				<section className='posts'>
					<ul>
						{this.state.posts.reverse().map((post) => {
							return (
								<Post
									key={post.id}
									date={post.date}
									user={post.user}
									text={post.text}
									image={post.image}
									userImage={post.userImage}
									isLiked={post.isLiked}
									like={this.liking}
									delete={this.deleting}
								/>
							)
						})}
					</ul>
				</section>
			</Main>
		)
	}
}

const Input = styled.input`
	padding: 20px 0;
	border: none;
	background: none;
	outline: none;
	height: 100%;
	width: 100%;
	resize: none;
`

const Main = styled.main`
	.form {
		height: 175px;
		width: 100%;
		border-radius: 4px;
		border: 2px solid #ecebf1;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr auto;
		margin-bottom: 30px;
		background-color: #fff;
		&__top {
			display: flex;
			align-items: center;
			height: 100%;
			padding: 0 20px;
		}
		&__bottom {
			height: 65px;
			border-top: 2px solid #ecebf1;
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			justify-items: center;
			align-items: center;

			&__photo {
				display: none;
			}
			svg {
				width: 33px;
				height: 33px;
				margin-right: 20px;
			}
			label,
			.add-friend,
			.feeling-activity {
				display: flex;
				align-items: center;
				cursor: pointer;
			}
		}
	}
`
