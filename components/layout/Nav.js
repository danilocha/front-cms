import React, { Fragment, useContext, useEffect } from 'react'
import Swal from 'sweetalert2'
import { AuthContext } from '../../context'

export default () => {

  let { token, loginOrlogoutAxios, updateTokenState, auth } = useContext(AuthContext)

  let id

  useEffect(() => {
    id = localStorage.getItem('token')
  }, [token])

  const finalizarSesion = async e => {
    e.preventDefault();
    try {
      await loginOrlogoutAxios.post('logout', { token: id })
      updateTokenState()
      localStorage.removeItem('token')
    } catch (error) {
      console.log(error)
    }
  }

  return <Fragment>
    <nav className="grey darken-4">
      <div className="nav-wrapper container ">
        <a href="/" className="brand-logo">
          E-ducando
          </a>
        {/* <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a> */}
        <ul className="right hide-on-med-and-down">
          <li>
            <a href="/perfil">Mi perfil</a>
          </li>
          <li>
            <a href="/articulos/nuevo">Articulos</a>
          </li>
          <li>
            <a href="/usuarios">Crear usuario</a>
          </li>
          {auth && <li>
            <a onClick={finalizarSesion} href="#!">Cerrar sesion</a>
          </li>}
        </ul>
      </div>
    </nav>
    {/* <ul className="sidenav" id="mobile-demo">
      <li>
        <a href="sass.html">Sass</a>
      </li>
      <li>
        <a href="badges.html">Components</a>
      </li>
      <li>
        <a href="collapsible.html">Javascript</a>
      </li>
      <li>
        <a href="mobile.html">Mobile</a>
      </li>
    </ul> */}
  </Fragment>
}