import { createContext, useState } from 'react'

export const LoginContext = createContext()

const LoginContextProvider = (props) => {
	const [loginInfo, setLoginInfo] = useState({
		status: false,
	})
	return (
		<LoginContext.Provider value={{ loginInfo, setLoginInfo }}>
			{props.children}
		</LoginContext.Provider>
	)
}

export default LoginContextProvider
