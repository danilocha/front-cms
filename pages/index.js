import React, { useContext, useEffect } from 'react'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import { AuthContext } from '../context'

export default () => {
  let { auth, token } = useContext(AuthContext)

  const router = useRouter()
  console.log(token)

  useEffect(() => {
    if (!auth) {
      if (!token || token === null) return router.push('/login')
    }
  }, [])


  return (
    <Layout pageTitle="e-ducando">
    </Layout>
  )
}
