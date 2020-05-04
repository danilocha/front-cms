import React, { useContext, useEffect } from 'react'
import Categorias from './Categoria'
import { useRouter } from 'next/router'
import { AuthContext } from '../../context'

const FormArticulo = () => {

    let { auth, token } = useContext(AuthContext)

    const router = useRouter()

    useEffect(() => {
        console.log(auth, token)
        if (!auth && localStorage.getItem('token') === null) router.push('/login')
    }, [token, auth])

    return (
        <form>
            <div className="container row">
                <h2>Nuevo articulo</h2>
                <div className="input-field col s12">
                    <input placeholder="Titulo" id="first_name" type="text" className="validate" />

                </div>
                <div className="file-field input-field col s12">
                    <div className="btn">
                        <span>Foto del articulo</span>
                        <input type="file" />
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" />
                    </div>
                </div>
                <Categorias />
                <div className="col s10">
                    <h4>Articulo</h4>
                    <textarea name="" className="materialize-textarea">Hola</textarea>
                </div>
                <div className="col s12 center">
                    <input className="btn" type="submit" value="Subir articulo" />
                </div>
            </div>

        </form>
    );
}

export default FormArticulo;