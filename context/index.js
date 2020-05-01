import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const { Provider, Consumer } = createContext()


export default ({ children }) => {
    const [auth, setAuth] = useState(false)
    const [token, setToken] = useState()


    const updateTokenState = (token) => token || token !== null ? setToken(token) : setToken()

    const clienteAxios = axios.create({
        baseURL: process.env.REACT_APP_EDUCAPI_URL,
        headers: {
            'x-auth-token': token,
        }
    })

    const tokenState = () => {
        let token = localStorage.getItem('token')
        if (!token || token !== null) setAuth(true)
        setToken(token)
    }

    useEffect(() => {
        tokenState()
    }, [token, auth])


    return <Provider value={{ auth, token, updateTokenState, clienteAxios }}>
        {children}
    </Provider>
}