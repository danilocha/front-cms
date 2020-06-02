import React, { useContext } from 'react';
import { AuthContext } from '../../context'


const EliminarArticulo = ({ idArticle }) => {
    let { token, loginOrlogoutAxios } = useContext(AuthContext)
    const eliminar = async () => {
        const res = await loginOrlogoutAxios.delete(`/articles/${idArticle}`, {
            headers: {

                'x-auth-token': JSON.parse(token)
            }
        });
        console.log(res)

    }

    return (
        <button className="btn red" onClick={eliminar}>Eliminar</button>
    );
}

export default EliminarArticulo;