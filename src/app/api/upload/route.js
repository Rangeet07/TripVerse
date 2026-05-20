import { NextResponse }
from 'next/server'

import cloudinary
from '@/lib/cloudinary'

export async function POST(req){

  try{

    const formData =
    await req.formData()

    const file =
    formData.get('image')

    if(!file){

      return NextResponse.json({

        success:false,

        message:'No file uploaded'

      })

    }

    const bytes =
    await file.arrayBuffer()

    const buffer =
    Buffer.from(bytes)

    const base64 =
    `data:${file.type};base64,${
      buffer.toString('base64')
    }`

      const uploadedImage =
      await cloudinary.uploader.upload(
        base64,
        {

          folder:'travel-tours',

          quality:'auto',

          fetch_format:'auto'

        }
)

    return NextResponse.json({

      success:true,

      imageUrl:
      uploadedImage.secure_url

    })

  }catch(error){

    return NextResponse.json({

      success:false,

      message:error.message

    })

  }

}