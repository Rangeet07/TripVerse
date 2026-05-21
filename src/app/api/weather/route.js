import { NextResponse }
from 'next/server'

export async function GET(req){

  try{

    const { searchParams } =
    new URL(req.url)

    const city =
    searchParams.get('city')

    const res = await fetch(

`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`

    )

    const data =
    await res.json()

    return NextResponse.json({

      success:true,

      weather:data

    })

  }catch(error){

    return NextResponse.json({

      success:false,

      message:error.message

    })

  }

}