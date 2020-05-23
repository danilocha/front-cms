import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../context'
const FormCategorias = ({ categorias, obtenerInformacion }) => {

    const [categoria, guardarCategoria] = useState('')

    let { token, loginOrlogoutAxios } = useContext(AuthContext)
    const guardarCategoriaAxios = e => {
        e.preventDefault();
        loginOrlogoutAxios.post('/categorie', categoria, {
            headers: {
                'x-auth-token': JSON.parse(token)
            }
        })

    }
    useEffect(() => {
        categorias
    }, [categoria])

    const miCategoria = e => {
        guardarCategoria({
            name: e.target.value
        })

    }


    return (
        <>
            <h4>Categoria</h4>

            {categorias.map((categoria) => (
                <p key={categoria._id}>
                    <label>
                        <input name="categoria" type="radio" value={categoria._id} onChange={obtenerInformacion} />
                        <span>{categoria.name}</span>
                    </label>
                </p>
            ))}


            <form onSubmit={guardarCategoriaAxios}>
                <h6>Otra</h6>
                <input className="validate" type="text" onChange={miCategoria} />
                <input className="btn" type="submit" value="Agregar categoria" />
            </form>
        </>
    );
}

export default FormCategorias;