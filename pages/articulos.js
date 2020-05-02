import React from 'react'
import { useRouter } from 'next/router'

import Layout from '../components/layout'

import { AuthContext } from '../context'

const Articulos = () => {

    let { auth } = useContext(AuthContext)

    const router = useRouter()

    if (!auth) return router.push('/login')

    return (
        <Layout>
            <div className="container">
                <h2>Listado de articulos</h2>
            </div>
        </Layout>
    );
}

export default Articulos;