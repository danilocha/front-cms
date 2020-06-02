import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import ListadoArticulos from '../components/articulos/ListadoArticulos'
import Layout from '../components/layout'

import { AuthContext } from '../context'

const Articulos = () => {

    let { auth, token, loginOrlogoutAxios } = useContext(AuthContext)
    let [articulos, guardarArticulos] = useState()

    const router = useRouter()
    const consultarApi = async () => {
        const articulosConsulta = await loginOrlogoutAxios.get('/articles')

        guardarArticulos(articulosConsulta.data)
    }

    useEffect(() => {
        consultarApi()

        if (!auth && localStorage.getItem('token') === null) router.push('/login')
    }, [token, auth])

    const articulosListado = articulos ? <ListadoArticulos articulos={articulos} /> : "cargando... categorias";


    return (
        <Layout>
            <div className="container ">
                <div className="row">
                    <h2 className="col m8">Listado de articulos</h2>
                    <Link href="/articulos/nuevo"><a className="btn col m4">Nuevo articulo</a></Link>

                </div>
                {articulosListado}
            </div>
        </Layout>
    );
}

export default Articulos;