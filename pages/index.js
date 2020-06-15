import React, { useContext, useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import { AuthContext } from '../context'
export default () => {
  const [users, setUsers] = useState([])
  let { auth, token, loginOrlogoutAxios, clienteAxios } = useContext(AuthContext)

  const router = useRouter()

  useEffect(() => {
    if (!auth && localStorage.getItem('token') === null) router.push('/login')
  }, [token, auth])



  useEffect(() => {
    if (auth && localStorage.getItem('token') !== null && token !== undefined) {
      const fetchUsers = async () => {
        try {
          const { data } = await loginOrlogoutAxios('users', {
            headers: {
              'x-auth-token': JSON.parse(token),
            }
          })
          setUsers(data)
        } catch (error) {
          console.log(error)
        }
      }
      fetchUsers()
    }
  }, [auth, token])

  return (
    <Layout pageTitle="e-ducando">
      {users.map(({ nombre }) => <div>{nombre}</div>)}
    </Layout>
  )
}
