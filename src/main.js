'use strict'

const rootContainer = document.getElementById('root')

class Todos extends React.Component {
	constructor(props) {
		super(props)

		this.createTasks = this.createTasks.bind(this)
	}

	change(key) {
		this.props.change(key)
	}

	createTasks(item) {
		return (
			<li key={item.key}>
				<div className='left'>
					<label>
						<input
							className='checkbox'
							type='checkbox'
							checked={item.isCompleted}
							ref={(b) => (this._checkboxElement = b)}
							onChange={() => {
								this.change(item.key)
							}}
						/>
						<span className='checkmark'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='36'
								height='36'
								viewBox='0 0 36 36'
							>
								<path d='M13.5 24.26L7.24 18l-2.12 2.12 8.38 8.38 18-18-2.12-2.12z' />
							</svg>
						</span>
						<span className="content">{item.content}</span>
					</label>
				</div>
				<div
					className='remove'
					onClick={() => {
						this.delete(item.key)
					}}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
					>
						<g
							id='Group_273'
							data-name='Group 273'
							transform='translate(-667 -416)'
						>
							<rect
								id='Rectangle_294'
								data-name='Rectangle 294'
								width='24'
								height='24'
								transform='translate(667 416)'
								fill='rgba(255,255,255,0)'
							/>
							<path
								id='Delete'
								d='M15.939,3.39A1.988,1.988,0,0,0,14.064,2H9.936l-.157.006a1.993,1.993,0,0,0-1.756,1.5L7.775,4.768l-.029.111a.878.878,0,0,1-.829.61H3.731l-.1.007a.752.752,0,0,0,.1,1.493H20.269l.1-.007a.752.752,0,0,0-.1-1.493H17.082l-.112-.007a.885.885,0,0,1-.746-.714l-.237-1.216Zm-1.025,2.1a2.442,2.442,0,0,1-.086-.261l-.038-.166-.226-1.169a.521.521,0,0,0-.413-.385L14.064,3.5H9.936a.525.525,0,0,0-.463.278l-.026.068L9.21,5.062a2.448,2.448,0,0,1-.124.427ZM18.978,8.72a.742.742,0,0,1,.672.706l-.01.206-.314,3.851L19,17.241c-.07.75-.132,1.383-.186,1.881A2.938,2.938,0,0,1,15.8,21.964c-2.647.049-5.192.048-7.663,0A2.916,2.916,0,0,1,5.19,19.13l-.127-1.26L4.84,15.427l-.228-2.681-.26-3.218a.744.744,0,0,1,.67-.808.734.734,0,0,1,.773.587l.03.295.245,3.017.267,3.127c.12,1.354.224,2.449.307,3.219a1.453,1.453,0,0,0,1.521,1.494c2.452.053,4.977.054,7.606.005a1.476,1.476,0,0,0,1.586-1.507l.127-1.253c.037-.386.077-.812.119-1.275l.267-3.076.322-3.946a.74.74,0,0,1,.688-.689Z'
								transform='translate(667 416)'
								fill='#31414d'
								fill-rule='evenodd'
							/>
						</g>
					</svg>
				</div>
			</li>
		)
	}

	delete(key) {
		this.props.delete(key)
	}

	render() {
		let todoEntries = this.props.entries
		let listItems = todoEntries.map(this.createTasks)

		return <ul>{listItems}</ul>
	}
}

class TodoList extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			items: [],
		}

		this.addNew = this.addNew.bind(this)
		this.deleteItem = this.deleteItem.bind(this)
		this.changeCompleted = this.changeCompleted.bind(this)
	}

	addNew(e) {
		e.preventDefault()

		if (this._inputElement.value !== '') {
			let newItem = {
				content: this._inputElement.value,
				key: Date.now(),
				isCompleted: false,
			}

			this.setState((prevState) => {
				return {
					items: [...prevState.items, newItem],
				}
			})
		}

		this._inputElement.value = ''
	}

	deleteItem(key) {
		let filteredItems = this.state.items.filter((item) => item.key != key)
		this.setState(() => {
			return {
				items: filteredItems,
			}
		})
	}

	changeCompleted(key) {
		let filteredItems = this.state.items.map((item) => {
			if (item.key == key) {
				item.isCompleted = !item.isCompleted
			}

			return item
		})
		this.setState(() => {
			return {
				items: filteredItems,
			}
		})
	}

	render() {
		return (
			<div>
				<form className='input-container' onSubmit={this.addNew}>
					<h1>To do list:</h1>
					<div className='addTodo'>
						<input
							ref={(a) => (this._inputElement = a)}
							type='text'
							name='newTodo'
							id='newTodo'
							placeholder='add new...'
						/>
						<button className='submit'>
							<svg
								id='Layer_2'
								data-name='Layer 2'
								xmlns='http://www.w3.org/2000/svg'
								width='36'
								height='36'
								viewBox='0 0 16 16'
							>
								<g id='Layer_1' data-name='Layer 1'>
									<g id='add_circle' data-name='add circle'>
										<path
											id='Path_24'
											data-name='Path 24'
											d='M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0Zm3.8,8.678H8.678V11.8a.678.678,0,1,1-1.356,0V8.678H4.2a.678.678,0,0,1,0-1.356H7.322V4.2a.678.678,0,0,1,1.356,0V7.322H11.8a.678.678,0,0,1,0,1.356Z'
											fill='#b4c7a9'
										/>
									</g>
								</g>
							</svg>
						</button>
					</div>
				</form>
				{/* list */}
				<Todos
					entries={this.state.items}
					delete={this.deleteItem}
					change={this.changeCompleted}
				/>
			</div>
		)
	}
}

ReactDOM.render(
	<div>
		<TodoList />
	</div>,
	rootContainer
)
