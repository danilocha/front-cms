import React, { useContext, useEffect } from 'react'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import { AuthContext } from '../context'


const Perfil = () => {

    let { auth, token } = useContext(AuthContext)

    const router = useRouter()

    useEffect(() => {
        if (!auth && localStorage.getItem('token') === null) return router.push('/login')
    }, [token])

    return (
        <Layout pageTitle="Editar perfil">
            <div className="container">
                <h2>Edita tu perfil</h2>
                <form>
                    <div className="row">
                        <div className="file-field input-field col s12">
                            <div className="btn">
                                <span>Foto de perfil</span>
                                <input type="file" />
                            </div>
                            <div className="file-path-wrapper">
                                <input className="file-path validate" type="text" />
                            </div>
                        </div>
                        <div className="input-field col s6">
                            <input id="nombre" type="text" className="validate" />
                            <label for="nombre">Nombre</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="apellido" type="text" className="validate" />
                            <label for="apellido">Apellido</label>
                        </div>
                        <div class="input-field col s12">
                            <textarea id="textarea1" class="materialize-textarea"></textarea>
                            <label for="textarea1">Resumen de biografia</label>
                        </div>
                        <div class="input-field col s12">
                            <textarea id="textarea2" class="materialize-textarea"></textarea>
                            <label for="textarea2">Biografia</label>
                        </div>
                    </div>
                    <div className="con s12 center"><input className="btn" type="submit" value="Editar" /></div>
                </form>
            </div>
        </Layout>
    );
}

export default Perfil;