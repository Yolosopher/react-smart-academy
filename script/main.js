'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var rootContainer = document.getElementById('root');

var Todos = function (_React$Component) {
	_inherits(Todos, _React$Component);

	function Todos(props) {
		_classCallCheck(this, Todos);

		var _this = _possibleConstructorReturn(this, (Todos.__proto__ || Object.getPrototypeOf(Todos)).call(this, props));

		_this.createTasks = _this.createTasks.bind(_this);
		return _this;
	}

	_createClass(Todos, [{
		key: 'change',
		value: function change(key) {
			this.props.change(key);
		}
	}, {
		key: 'createTasks',
		value: function createTasks(item) {
			var _this2 = this;

			return React.createElement(
				'li',
				{ key: item.key },
				React.createElement(
					'div',
					{ className: 'left' },
					React.createElement(
						'label',
						null,
						React.createElement('input', {
							className: 'checkbox',
							type: 'checkbox',
							checked: item.isCompleted,
							ref: function ref(b) {
								return _this2._checkboxElement = b;
							},
							onChange: function onChange() {
								_this2.change(item.key);
							}
						}),
						React.createElement(
							'span',
							{ className: 'checkmark' },
							React.createElement(
								'svg',
								{
									xmlns: 'http://www.w3.org/2000/svg',
									width: '36',
									height: '36',
									viewBox: '0 0 36 36'
								},
								React.createElement('path', { d: 'M13.5 24.26L7.24 18l-2.12 2.12 8.38 8.38 18-18-2.12-2.12z' })
							)
						),
						React.createElement(
							'span',
							{ className: 'content' },
							item.content
						)
					)
				),
				React.createElement(
					'div',
					{
						className: 'remove',
						onClick: function onClick() {
							_this2.delete(item.key);
						}
					},
					React.createElement(
						'svg',
						{
							xmlns: 'http://www.w3.org/2000/svg',
							width: '24',
							height: '24',
							viewBox: '0 0 24 24'
						},
						React.createElement(
							'g',
							{
								id: 'Group_273',
								'data-name': 'Group 273',
								transform: 'translate(-667 -416)'
							},
							React.createElement('rect', {
								id: 'Rectangle_294',
								'data-name': 'Rectangle 294',
								width: '24',
								height: '24',
								transform: 'translate(667 416)',
								fill: 'rgba(255,255,255,0)'
							}),
							React.createElement('path', {
								id: 'Delete',
								d: 'M15.939,3.39A1.988,1.988,0,0,0,14.064,2H9.936l-.157.006a1.993,1.993,0,0,0-1.756,1.5L7.775,4.768l-.029.111a.878.878,0,0,1-.829.61H3.731l-.1.007a.752.752,0,0,0,.1,1.493H20.269l.1-.007a.752.752,0,0,0-.1-1.493H17.082l-.112-.007a.885.885,0,0,1-.746-.714l-.237-1.216Zm-1.025,2.1a2.442,2.442,0,0,1-.086-.261l-.038-.166-.226-1.169a.521.521,0,0,0-.413-.385L14.064,3.5H9.936a.525.525,0,0,0-.463.278l-.026.068L9.21,5.062a2.448,2.448,0,0,1-.124.427ZM18.978,8.72a.742.742,0,0,1,.672.706l-.01.206-.314,3.851L19,17.241c-.07.75-.132,1.383-.186,1.881A2.938,2.938,0,0,1,15.8,21.964c-2.647.049-5.192.048-7.663,0A2.916,2.916,0,0,1,5.19,19.13l-.127-1.26L4.84,15.427l-.228-2.681-.26-3.218a.744.744,0,0,1,.67-.808.734.734,0,0,1,.773.587l.03.295.245,3.017.267,3.127c.12,1.354.224,2.449.307,3.219a1.453,1.453,0,0,0,1.521,1.494c2.452.053,4.977.054,7.606.005a1.476,1.476,0,0,0,1.586-1.507l.127-1.253c.037-.386.077-.812.119-1.275l.267-3.076.322-3.946a.74.74,0,0,1,.688-.689Z',
								transform: 'translate(667 416)',
								fill: '#31414d',
								'fill-rule': 'evenodd'
							})
						)
					)
				)
			);
		}
	}, {
		key: 'delete',
		value: function _delete(key) {
			this.props.delete(key);
		}
	}, {
		key: 'render',
		value: function render() {
			var todoEntries = this.props.entries;
			var listItems = todoEntries.map(this.createTasks);

			return React.createElement(
				'ul',
				null,
				listItems
			);
		}
	}]);

	return Todos;
}(React.Component);

var TodoList = function (_React$Component2) {
	_inherits(TodoList, _React$Component2);

	function TodoList(props) {
		_classCallCheck(this, TodoList);

		var _this3 = _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).call(this, props));

		_this3.state = {
			items: []
		};

		_this3.addNew = _this3.addNew.bind(_this3);
		_this3.deleteItem = _this3.deleteItem.bind(_this3);
		_this3.changeCompleted = _this3.changeCompleted.bind(_this3);
		return _this3;
	}

	_createClass(TodoList, [{
		key: 'addNew',
		value: function addNew(e) {
			e.preventDefault();

			if (this._inputElement.value !== '') {
				var newItem = {
					content: this._inputElement.value,
					key: Date.now(),
					isCompleted: false
				};

				this.setState(function (prevState) {
					return {
						items: [].concat(_toConsumableArray(prevState.items), [newItem])
					};
				});
			}

			this._inputElement.value = '';
		}
	}, {
		key: 'deleteItem',
		value: function deleteItem(key) {
			var filteredItems = this.state.items.filter(function (item) {
				return item.key != key;
			});
			this.setState(function () {
				return {
					items: filteredItems
				};
			});
		}
	}, {
		key: 'changeCompleted',
		value: function changeCompleted(key) {
			var filteredItems = this.state.items.map(function (item) {
				if (item.key == key) {
					item.isCompleted = !item.isCompleted;
				}

				return item;
			});
			this.setState(function () {
				return {
					items: filteredItems
				};
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			return React.createElement(
				'div',
				null,
				React.createElement(
					'form',
					{ className: 'input-container', onSubmit: this.addNew },
					React.createElement(
						'h1',
						null,
						'To do list:'
					),
					React.createElement(
						'div',
						{ className: 'addTodo' },
						React.createElement('input', {
							ref: function ref(a) {
								return _this4._inputElement = a;
							},
							type: 'text',
							name: 'newTodo',
							id: 'newTodo',
							placeholder: 'add new...'
						}),
						React.createElement(
							'button',
							{ className: 'submit' },
							React.createElement(
								'svg',
								{
									id: 'Layer_2',
									'data-name': 'Layer 2',
									xmlns: 'http://www.w3.org/2000/svg',
									width: '36',
									height: '36',
									viewBox: '0 0 16 16'
								},
								React.createElement(
									'g',
									{ id: 'Layer_1', 'data-name': 'Layer 1' },
									React.createElement(
										'g',
										{ id: 'add_circle', 'data-name': 'add circle' },
										React.createElement('path', {
											id: 'Path_24',
											'data-name': 'Path 24',
											d: 'M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0Zm3.8,8.678H8.678V11.8a.678.678,0,1,1-1.356,0V8.678H4.2a.678.678,0,0,1,0-1.356H7.322V4.2a.678.678,0,0,1,1.356,0V7.322H11.8a.678.678,0,0,1,0,1.356Z',
											fill: '#b4c7a9'
										})
									)
								)
							)
						)
					)
				),
				React.createElement(Todos, {
					entries: this.state.items,
					'delete': this.deleteItem,
					change: this.changeCompleted
				})
			);
		}
	}]);

	return TodoList;
}(React.Component);

ReactDOM.render(React.createElement(
	'div',
	null,
	React.createElement(TodoList, null)
), rootContainer);