'use client'

import { useState } from 'react'

export default function AddTourPage(){

    const [formData,setFormData] = useState({
      title:'',
      location:'',
      description:'',
      price:'',
      duration:''
    })

    const [images,setImages] = useState([])

  const handleChange = (e)=>{

    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })

  }
const handleSubmit = async(e)=>{

  e.preventDefault()

  try{

    if(images.length===0){

      alert('Please select an image')

      return

    }

    /*
      STEP 1
      Upload image
    */

const uploadedImages = []

for(const image of images){

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

  if(uploadData.success){

    uploadedImages.push(
      uploadData.imageUrl
    )

  }

}

    /*
      STEP 2
      Save tour with image URL
    */

    const tourData = {

      ...formData,

      images:uploadedImages,

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
        price:'',
        duration:''

      })

      setImages([])

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
          multiple
          onChange={(e)=>
            setImages(
              Array.from(
                e.target.files
              )
            )
          }
          required
        />
        <div
          style={{
            display:'grid',
            gridTemplateColumns:
            'repeat(auto-fit,minmax(120px,1fr))',
            gap:'12px',
            marginBottom:'20px'
          }}
        >

        {
          images.map((image,index)=>(

            <img
              key={index}
              src={URL.createObjectURL(image)}
              alt="preview"
              style={{
                width:'100%',
                height:'120px',
                objectFit:'cover',
                borderRadius:'12px'
              }}
            />

          ))
        }

        </div>
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