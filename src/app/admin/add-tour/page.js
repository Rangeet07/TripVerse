'use client'

import { useState } from 'react'

export default function AddTourPage(){

  const [formData,setFormData] = useState({
    title:'',
    location:'',
    description:'',
    image:'',
    price:'',
    duration:''
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

    const res = await fetch('/api/tours',{

      method:'POST',

      headers:{
        'Content-Type':'application/json'
      },

      body:JSON.stringify({
        ...formData,
        price:Number(formData.price)
      })

    })

    const data = await res.json()

    if(data.success){

      alert('Tour Added Successfully')

      setFormData({
        title:'',
        location:'',
        description:'',
        image:'',
        price:'',
        duration:''
      })

    }else{

      alert(data.message)

    }

  }catch(error){

    console.log(error)

    alert('Something went wrong')

  }

}
  return (
    <div>

      <h1
        style={{
          marginBottom:'30px'
        }}
      >
        Add Tour
      </h1>

      <form
        onSubmit={handleSubmit}
        className="admin-form"
      >

        <input
        type="text"
        placeholder="Tour Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
        />
        <input
          type="text"
          placeholder="Location"
          name="location"
        value={formData.location}
          onChange={handleChange}
          required
        />

        <textarea
          placeholder="Description"
          name="description"
          rows="5"
                  value={formData.description}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          placeholder="Image URL"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          placeholder="Price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          placeholder="Duration"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Add Tour
        </button>

      </form>

    </div>
  )
}