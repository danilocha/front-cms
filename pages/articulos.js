import React from 'react'
import { useRouter } from 'next/router'

import Layout from '../components/layout'

import { AuthContext } from '../context'

const Articulos = () => {

    let { auth, token } = useContext(AuthContext)

    const router = useRouter()

    useEffect(() => {
        console.log(auth, token)
        if (!auth && localStorage.getItem('token') === null) router.push('/login')
    }, [token, auth])

    return (
        <Layout>
            <div className="container">
                <h2>Listado de articulos</h2>
            </div>
        </Layout>
    );
}

export default Articulos;