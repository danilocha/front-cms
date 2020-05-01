import React, { Fragment } from 'react'
import Head from 'next/head'
import Nav from './Nav'
import AuthProvider from '../../context'

export default ({ pageTitle, children }) => (
  <Fragment>
    <Head>
      <title>{pageTitle}</title>
      <meta charSet="utf-8" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
      ></link>

      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

    </Head>

    <AuthProvider>
      <Nav />

      <main>{children}</main>
    </AuthProvider>
  </Fragment>
)
