'use client'

import { useState } from 'react'
import imageCompression from 'browser-image-compression'
import './../admin.css'
export default function AddTourPage(){

    const [formData,setFormData] = useState({
      title:'',
      location:'',
      description:'',
      price:'',
      duration:''
    })

    const [images,setImages] = useState([])
          const [loading,setLoading] =
        useState(false)
    
        const [progress,setProgress] =
        useState(0)
    
        const [success,setSuccess] =
        useState('')

  const handleChange = (e)=>{

    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })

  }
const handleSubmit = async(e)=>{

      e.preventDefault()

      setLoading(true)
      setProgress(0)
      setSuccess('')

  try{

    if(images.length===0){

      alert('Please select an image')

      return

    }

    if(images.length > 5){

      alert(
        'Maximum 5 images allowed'
      )

      return
    }
        

    /*
      STEP 1
      Upload image
    */

const uploadedImages = []

for(let i=0;i<images.length;i++){

  const image = images[i]

  /*
    COMPRESS IMAGE
  */

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
    setProgress(
      Math.round(
        ((i + 1) / images.length)
        * 80
      )
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
    setProgress(90)
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
    setProgress(100)
    if(data.success){

      setSuccess(
      '✅ Destination Added Successfully'
      )
      setLoading(false)
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
    setLoading(false)
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
        {
        success && (

        <div className="success-banner">

          {success}

        </div>

        )
        }
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
{
            loading && (

            <div className="upload-progress">

              <div className="progress-top">

                <span>
                  Uploading...
                </span>

                <span>
                  {progress}%
                </span>

              </div>

              <div className="progress-bar">

                <div
                  className="progress-fill"
                  style={{
                    width:`${progress}%`
                  }}
                />

              </div>

            </div>

            )
}
          <button
            type="submit"
            disabled={loading}
          >

          {
          loading
          ?
          `Uploading ${progress}%`
          :
          'Add Tour'
          }

          </button>
      </form>

    </div>
  )
}