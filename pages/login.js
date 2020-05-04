import React, { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import Swal from 'sweetalert2'

import { AuthContext } from '../context'

export default () => {

  let { updateTokenState, loginOrlogoutAxios, auth } = useContext(AuthContext)

  const [credenciales, guardarCredenciales] = useState({})


  const router = useRouter()

  const iniciarSesion = async e => {
    e.preventDefault();
    try {
      const { data } = await loginOrlogoutAxios.post('login', credenciales)
      updateTokenState(data.token)
      localStorage.setItem('token', JSON.stringify(data.token))
      localStorage.setItem('id', JSON.stringify(data.id))

    } catch (error) {
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: 'Tenemos un error',
        text: error.response.data.msg
      })
    }
  }

  const leerDatos = e => {
    guardarCredenciales({
      ...credenciales,
      [e.target.name]: e.target.value
    })
  }

  if (auth) return router.push('/')


  return <Layout pageTitle="Inicia sesion">

    <div className="container">
      <h1 className="center">Bienvenido a E-ducando</h1>
      <form onSubmit={iniciarSesion}>
        <div className="input-field col s6">
          <input id="correo" type="text" className="validate" name="email" onChange={leerDatos} />
          <label htmlFor="correo"> correo</label>
        </div>
        <div className="input-field col s6">
          <input id="contrasena" type="password" className="validate" name="password" onChange={leerDatos} />
          <label htmlFor="contrasena">Contraseña</label>
        </div>
        <div className="con s12 center"><input className="btn" type="submit" value="iniciar sesión" /></div>

      </form>
    </div>
  </Layout>
}
