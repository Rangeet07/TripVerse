'use client'

import { useState } from 'react'
import imageCompression from 'browser-image-compression'

export default function AddDestinationPage(){

  const [formData,setFormData] = useState({
    name:'',
    country:'',
    description:'',
    bestTime:'',
    tags:'',
    featured: false
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

      if(images.length === 0){

        alert('Please select at least one image')
        return

      }

      const uploadedImages = []

      for(const image of images){

        const compressedImage =
        await imageCompression(
          image,
          {
            maxSizeMB:1,
            maxWidthOrHeight:1600,
            useWebWorker:true
          }
        )

        const imageFormData =
        new FormData()

        imageFormData.append(
          'image',
          compressedImage
        )

        const uploadRes =
        await fetch(
          '/api/upload',
          {
            method:'POST',
            body:imageFormData
          }
        )

        const uploadData =
        await uploadRes.json()

        if(uploadData.success){

          uploadedImages.push(
            uploadData.imageUrl
          )

        }

      }

      const destinationData = {

        name:formData.name,

        country:formData.country,

        description:
        formData.description,

        bestTime:
        formData.bestTime,
        
        featured: formData.featured,

        tags:
        formData.tags
        .split(',')
        .map(tag=>tag.trim())
        .filter(Boolean),

        images:uploadedImages

      }

      const res = await fetch(
        '/api/destinations',
        {
          method:'POST',
          headers:{
            'Content-Type':
            'application/json'
          },
          body:JSON.stringify(
            destinationData
          )
        }
      )

      const data =
      await res.json()

      if(data.success){

        alert(
          'Destination Added Successfully'
        )

          setFormData({

            title:'',
            location:'',
            description:'',
            price:'',
            duration:'',
            featured:false

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
        Add Destination
      </h1>

      <form
        onSubmit={handleSubmit}
        className="admin-form"
      >

        <input
          type="text"
          placeholder="Destination Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          placeholder="Country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        />

        <textarea
          rows="5"
          placeholder="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          placeholder="Best Time to Visit"
          name="bestTime"
          value={formData.bestTime}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          placeholder="Tags (comma separated)"
          name="tags"
          value={formData.tags}
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
            images.map(
              (image,index)=>(

                <img
                  key={index}
                  src={
                    URL.createObjectURL(
                      image
                    )
                  }
                  alt="preview"
                  style={{
                    width:'100%',
                    height:'120px',
                    objectFit:'cover',
                    borderRadius:'12px'
                  }}
                />

              )
            )
          }

        </div>
                  <div
            style={{
              display:'flex',
              alignItems:'center',
              gap:'10px'
            }}
          >

            <input
              type="checkbox"
              id="featured"
              checked={formData.featured}
              onChange={(e)=>
                setFormData({
                  ...formData,
                  featured:e.target.checked
                })
              }
              style={{
                width:'18px',
                height:'18px'
              }}
            />

            <label htmlFor="featured">
              Show on Homepage Featured Tours
            </label>

          </div>

        <button type="submit">
          Add Destination
        </button>

      </form>

    </div>

  )

}