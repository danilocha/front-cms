import React from 'react'
import Layout from '../components/Layout'

export default () => (
  <Layout pageTitle="Inicia sesion">

    <div className="container">
      <h1 className="center">Bienvenido a E-ducando</h1>
      <form>
        <div className="input-field col s6">
          <input id="correo" type="text" className="validate" />
          <label for="correo"> correo</label>
        </div>
        <div className="input-field col s6">
          <input id="contrasena" type="password" className="validate" />
          <label for="contrasena">Contraseña</label>
        </div>
        <div className="con s12 center"><input className="btn" type="submit" value="iniciar sesión" /></div>

      </form>
    </div>
  </Layout>
)
