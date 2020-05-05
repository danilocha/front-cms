import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'




const AuthContext = createContext()


const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(false)
    const [token, setToken] = useState()
    const [id, setId] = useState('')




    const updateTokenState = (token) => token ? setToken(token) : setToken()

    const clienteAxios = axios.create({
        baseURL: 'http://localhost:5000/api',
        headers: {
            'x-auth-token': token
        }
    })

    const loginOrlogoutAxios = axios.create({
        baseURL: 'http://localhost:5000/api',
    })

    const tokenState = () => {
        if (localStorage.getItem('token') !== null) {
            let tokenValue = localStorage.getItem('token')
            let idValue = localStorage.getItem('id')
            setId(idValue)
            setAuth(true)
            return setToken(tokenValue)
        }
        if (token) {
            setAuth(true)
            return setToken(token)
        }
        if (!token) {
            setAuth(false)
            setId(null)
            return setToken()
        }
    }

    useEffect(() => {
        tokenState()
    }, [token, auth])


    return (<AuthContext.Provider value={{ auth, token, updateTokenState, clienteAxios, loginOrlogoutAxios, id }}>
        {children}
    </AuthContext.Provider>)
}

export { AuthProvider, AuthContext }