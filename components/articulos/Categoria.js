import React, { useState, useEffect } from 'react';

import clienteAxios from '../../config/axios'
import FormCategorias from './formCategorias';
const Categorias = () => {

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