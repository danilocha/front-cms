import React, { useContext, useEffect } from 'react'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import { AuthContext } from '../context'

export default () => {
  let { auth, token } = useContext(AuthContext)

  const router = useRouter()

  useEffect(() => {
    console.log(auth, token)
    if (!auth && localStorage.getItem('token') === null) router.push('/login')
  }, [token, auth])

  return (
    <Layout pageTitle="e-ducando">
    </Layout>
  )
}
