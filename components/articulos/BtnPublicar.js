import React, { useContext } from 'react';
import { AuthContext } from '../../context'

const BtnPublicar = ({ publicar, idArticle }) => {
    let { token, loginOrlogoutAxios, id } = useContext(AuthContext)
    console.log(idArticle)


    const cambiarPublicar = async e => {
        e.preventDefault();

        if (publicar) {
            const data = { "public": false }
            await loginOrlogoutAxios.put(`/articles/${idArticle}`, data, {
                headers: {

                    'x-auth-token': JSON.parse(token)
                }
            });
            console.log(data)
        } else {
            const data = { public: true }
            const res = await loginOrlogoutAxios.put(`/articles/${idArticle}`, data, {
                headers: {

                    'x-auth-token': JSON.parse(token)
                }
            });
            console.log(res)
        }
    }

    const boton = publicar ? "No publicar" : "publicar"
    const boton2 = publicar ? "btn  orange darken-4" : "btn"
    return (
        <button className={boton2} onClick={cambiarPublicar}>{boton}</button>
    );
}

export default BtnPublicar;