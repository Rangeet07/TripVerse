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

    const [image,setImage] = useState(null)

  const handleChange = (e)=>{

    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })

  }
const handleSubmit = async(e)=>{

  e.preventDefault()

  try{

    if(!image){

      alert('Please select an image')

      return

    }

    /*
      STEP 1
      Upload image
    */

    const imageFormData =
    new FormData()

    imageFormData.append(
      'image',
      image
    )

    const uploadRes =
    await fetch('/api/upload',{

      method:'POST',

      body:imageFormData

    })

    const uploadData =
    await uploadRes.json()

    if(!uploadData.success){

      alert(
        'Image upload failed'
      )

      return

    }

    /*
      STEP 2
      Save tour with image URL
    */

    const tourData = {

      ...formData,

      image:
      uploadData.imageUrl,

      price:Number(
        formData.price
      )

    }

    const res = await fetch(
      '/api/tours',
      {

        method:'POST',

        headers:{
          'Content-Type':
          'application/json'
        },

        body:JSON.stringify(
          tourData
        )

      }
    )

    const data =
    await res.json()

    if(data.success){

      alert(
        'Tour Added Successfully'
      )

      setFormData({

        title:'',
        location:'',
        description:'',
        image:'',
        price:'',
        duration:''

      })

      setImage(null)

    }else{

      alert(data.message)

    }

  }catch(error){

    console.log(error)

    alert(
      'Something went wrong'
    )

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
          type="file"
          accept="image/*"
          onChange={(e)=>
            setImage(
              e.target.files[0]
            )
          }
          required
        />
        {
  image && (

      <img
        src={URL.createObjectURL(image)}
        alt="preview"
        style={{
          width:'100%',
          maxHeight:'250px',
          objectFit:'cover',
          borderRadius:'12px',
          marginBottom:'20px'
        }}
      />


    )}

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