import React, { useContext, useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import FormArticulo from '../../components/articulos/FormArticulo'
import { AuthContext } from '../../context'
import { useRouter } from 'next/router'
const Editar = () => {

    const [contEditArticulo, guardarContEditArticulo] = useState([])
    let { loginOrlogoutAxios } = useContext(AuthContext)
    const router = useRouter();
    const { query: { editar } } = router

    const traerArticulo = async () => {
        const res = await loginOrlogoutAxios.get(`/articles/edit/${editar}`);
        //const cont = res.data[0]
        guardarContEditArticulo(JSON.parse(res.data[0].contenido[0][0]))

    }
    traerArticulo()


    return (
        <Layout pageTitle="e-ducando">
            <FormArticulo editar={editar} contEditArticulo={contEditArticulo}></FormArticulo>
        </Layout>
    );
}

export default Editar;