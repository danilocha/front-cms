import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

const AuthContext = createContext()


const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(false)
    const [token, setToken] = useState()


    const updateTokenState = (token) => token || token !== null ? setToken(token) : setToken()


    const clienteAxios = axios.create({
        baseURL: 'http://localhost:5000/api',
        headers: {
            'x-auth-token': token,
        }
    })

    const loginOrlogoutAxios = axios.create({
        baseURL: 'http://localhost:5000/api',
    })

    const tokenState = () => {
        let token = localStorage.getItem('token')
        if (!token || token !== null) setAuth(true)
        setToken(token)
    }

    useEffect(() => {
        tokenState()
    }, [token, auth])


    return (<AuthContext.Provider value={{ auth, token, updateTokenState, clienteAxios, loginOrlogoutAxios }}>
        {children}
    </AuthContext.Provider>)
}

export { AuthProvider, AuthContext }