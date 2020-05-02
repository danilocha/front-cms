import React, { useContext, useState } from 'react'
import Layout from '../components/Layout'
import Swal from 'sweetalert2'

import { AuthContext } from '../context'

export default () => {

  let { auth, token, updateTokenState, clienteAxios, loginOrlogoutAxios } = useContext(AuthContext)
  const [credenciales, guardarCredenciales] = useState({})

  const iniciarSesion = async e => {
    e.preventDefault();
    try {
      const respuesta = await loginOrlogoutAxios.post('login', credenciales)
      updateTokenState(respuesta.data.token)
      console.log(token)
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
