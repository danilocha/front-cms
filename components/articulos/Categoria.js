import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context'

import FormCategorias from './formCategorias';
const Categorias = () => {
    let { clienteAxios } = useContext(AuthContext)

    const [categorias, guardarCategorias] = useState([])

    // query al api
    const consultarApi = async () => {
        const categoriasConsulta = await clienteAxios.get('/categories')
        guardarCategorias(categoriasConsulta.data)
    }
    useEffect(() => {
        consultarApi()
    }, [])


    const formCategoria = categorias ? <FormCategorias categorias={categorias} /> : "cargando... categorias";
    return (
        <div className="col s2">{formCategoria}</div>
    );
}

export default Categorias;