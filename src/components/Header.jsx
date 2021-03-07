import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { LoginContext } from '../context/LoginContext'

function Header(props) {
	const { loginInfo, setLoginInfo } = useContext(LoginContext)
	return (
		<HeaderEl>
			<div className='header container'>
				<div className='userinfo'>
					{loginInfo.status && (
						<>
							<div>
								USER: <span>{loginInfo.email}</span>
							</div>
							<div
								className='logout'
								onClick={() => {
									setLoginInfo({ status: false })
									localStorage.clear()
								}}
							>
								Logout
							</div>
						</>
					)}
				</div>
				<nav>
					<ul>
						{!loginInfo.status && (
							<li>
								<Link to='/register'>Register</Link>
							</li>
						)}
						<li>
							<Link to='/'>{loginInfo.status ? 'Home' : 'Login'}</Link>
						</li>
						<li>
							<Link to='/todos'>Todo List</Link>
						</li>
					</ul>
				</nav>
			</div>
		</HeaderEl>
	)
}

const HeaderEl = styled.header`
	height: 120px;
	background-color: #2f3e46;
	font-size: 2rem;
	color: #cad2c5;
	.header {
		display: flex;
		height: 100%;
		justify-content: space-between;
		align-items: center;
	}
	nav {
		height: 100%;
	}
	ul {
		height: 100%;
		display: flex;
		align-items: center;
		gap: 2rem;
	}
`

export default Header
