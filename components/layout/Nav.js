import React, { Fragment } from 'react'

export default () => (
  <Fragment>
    <nav className="grey darken-4">
      <div className="nav-wrapper container ">
        <a href="#!" className="brand-logo">
          E-ducando
          </a>
        <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <a href="#!">Mi perfil</a>
          </li>
          <li>
            <a href="#!">Articulos</a>
          </li>
          <li>
            <a href="#!">Crear usuario</a>
          </li>
          <li>
            <a href="#!">Cerrar sesion</a>
          </li>
        </ul>
      </div>
    </nav>
    <ul className="sidenav" id="mobile-demo">
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
    </ul>
  </Fragment>
)
