import React, { useContext, useEffect, useState } from 'react'
import Layout from '../components/layout'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'
import { AuthContext } from '../context'

const Usuarios = () => {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [password, setPassword] = useState('')
    const [repetirPassword, setConfirmarPassword] = useState('')
    const [email, setEmail] = useState('')
    const [confirmarEmail, setConfirmarEmail] = useState('')
    const [resBio, setResBio] = useState('')
    const [bio, setBio] = useState('')

    let { auth, token, loginOrlogoutAxios, id } = useContext(AuthContext)

    const router = useRouter()

    const crearUsuario = async e => {
        e.preventDefault()

        if (email !== confirmarEmail || password !== repetirPassword) return Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, verifique que el email y contraseña coincidan'
        })

        const payload = {
            nombre,
            apellido,
            password,
            email,
            bio,
            resBio
        }

        try {
            const response = await loginOrlogoutAxios.post('users', payload)
            Swal.fire({
                icon: 'success',
                title: 'Operacion exitosa',
                text: response.data.msg
            })
            router.push('/login')
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Tenemos un error',
                text: error.response.data.msg
            })
        }
    }

    const editarUsuario = async e => {
        e.preventDefault()

        if (email !== confirmarEmail || password !== repetirPassword) return Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, verifique que el email y contraseña coincidan'
        })

        const payload = {
            nombre,
            apellido,
            password,
            email,
            bio,
            resBio
        }

        try {
            const response = await loginOrlogoutAxios.put(`users/${JSON.parse(id)}`, payload, {
                headers: {
                    'x-auth-token': JSON.parse(token),
                }
            })
            Swal.fire({
                icon: 'success',
                title: 'Operacion exitosa',
                text: response.data.msg
            })
            router.push('/')
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Tenemos un error',
                text: error.response.data.msg
            })
        }
    }

    const traerDatosEditarUsuario = async () => {
        const {
            data: {
                nombre,
                apellido,
                email,
                bio,
                resBio
            }
        } = await loginOrlogoutAxios.get(`users/${JSON.parse(id)}`, {
            headers: {
                'x-auth-token': JSON.parse(token),
            }
        })

        setNombre(nombre)
        setApellido(apellido)
        setEmail(email)
        setConfirmarEmail(email)
        setResBio(resBio)
        setBio(bio)
    }

    useEffect(() => {
        if (localStorage.getItem('token') !== null && auth) {
            (async () => await traerDatosEditarUsuario())()
        }
    }, [])

    return (
        <Layout>
            <div className="container">

                <h2>{auth ? 'Edita tu perfil' : 'Crear usuario'}</h2>

                <form onSubmit={(e) => {
                    auth && token ? editarUsuario(e) : crearUsuario(e)
                }}>
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
                            <input defaultValue={nombre} onChange={(e) => setNombre(e.target.value)} id="nombre" type="text" className="validate" />
                            <label for="nombre">Nombre</label>
                        </div>
                        <div className="input-field col s6">
                            <input defaultValue={apellido} onChange={(e) => setApellido(e.target.value)} id="apellido" type="text" className="validate" />
                            <label for="apellido">Apellido</label>
                        </div>
                        <div className="input-field col s6">
                            <input defaultValue={email} onChange={(e) => setEmail(e.target.value)} id="correo1" type="text" className="validate" />
                            <label for="correo1">correo</label>
                        </div>
                        <div className="input-field col s6">
                            <input defaultValue={email} onChange={(e) => setConfirmarEmail(e.target.value)} id="correo2" type="text" className="validate" />
                            <label for="correo2">Confirmar correo</label>
                        </div>
                        <div className="input-field col s6">
                            <input onChange={(e) => setPassword(e.target.value)} id="contrasena1" type="password" className="validate" />
                            <label for="contrasena1">Contraseña</label>
                        </div>
                        <div className="input-field col s6">
                            <input onChange={(e) => setConfirmarPassword(e.target.value)} id="contrasena2" type="password" className="validate" />
                            <label for="contrasena2">Confirmar contraseña</label>
                        </div>

                        <div class="input-field col s12">
                            <textarea defaultValue={resBio} onChange={(e) => setResBio(e.target.value)} id="textarea1" class="materialize-textarea"></textarea>
                            <label for="textarea1">Resumen de biografia</label>
                        </div>
                        <div class="input-field col s12">
                            <textarea defaultValue={bio} onChange={(e) => setBio(e.target.value)} id="textarea2" class="materialize-textarea"></textarea>
                            <label for="textarea2">Biografia</label>
                        </div>
                    </div>

                    <div className="con s12 center">
                        <input className="btn" type="submit" value={auth && token ? 'Editar usuario' : 'Crear usuario'} />
                    </div>
                </form>
            </div>
        </Layout>
    );
}

export default Usuarios;