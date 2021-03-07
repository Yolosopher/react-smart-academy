import React, { useContext, useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import axios from 'axios'
import { LoginContext } from './context/LoginContext'
import TodoList from './components/TodoList';
import Register from './components/Register';

const App = () => {
	const { loginInfo, setLoginInfo } = useContext(LoginContext)
    const [tkn, settkn] = useState([])
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		let token = localStorage.getItem('token')
		const getAuth = async () => {
			if (token) {
				let response = await axios.get(
					'http://localhost:7000/users/isUserLoggedIn',
					{
						headers: {
							'x-access-token': token,
						},
					}
				)
				if (response) {
					setLoginInfo({
						status: true,
						email: response.data.user.email,
						id: response.data.user._id,
					})
				}
			}
		}
		try {
			getAuth().then(() => {    
                setLoading(false)
            })
		} catch (error) {
			console.log(error.message)
		} 
	}, [tkn])

	return (
		<>
			<Header />
			<Switch>
				<Route exact path='/'>
					<Home func={settkn} loading={loading} />
				</Route>
                <Route path='/todos'>
                    <TodoList />
                </Route>
				<Route path='/register'>
					<Register func={settkn} />
				</Route>
			</Switch>
		</>
	)
}

export default App
