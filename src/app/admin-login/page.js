'use client'

import { useState } from 'react'

import { useRouter }
from 'next/navigation'

export default function AdminLoginPage(){

  const router = useRouter()

  const [formData,setFormData] =
  useState({
    email:'',
    password:''
  })

  const handleChange = (e)=>{

    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })

  }

  const handleSubmit = async(e)=>{

    e.preventDefault()

    try{

      const res = await fetch(
        '/api/auth/login',
        {
          method:'POST',

          headers:{
            'Content-Type':'application/json'
          },

          body:JSON.stringify(formData)
        }
      )

      const data = await res.json()

      if(data.success){

        router.push('/admin')

      }else{

        alert(data.message)

      }

    }catch(error){

      console.log(error)

    }

  }

  return (
    <div className="login-page">

      <form
        onSubmit={handleSubmit}
        className="login-form"
      >

        <h1>
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          required
        />

        <button type="submit">
          Login
        </button>

      </form>

    </div>
  )
}