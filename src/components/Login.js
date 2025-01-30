import React from 'react'
import { useContext } from 'react'
import AppContext from '../store/app-context'

// Bina props ke we can pass functions like this using useContext hook and Context API

const Login = () => {
    const { isLoggedIn, login } = useContext(AppContext);

  return (
    <div>{isLoggedIn ? "Welcome" : <button onClick={login}>Log in</button>}</div>
  )
}

export default Login