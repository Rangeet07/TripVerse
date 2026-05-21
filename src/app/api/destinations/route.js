import { NextResponse }
from 'next/server'

export async function GET(){

  try{

    const destinations = [

      'Maldives',
      'Paris',
      'Bali',
      'Dubai',
      'Switzerland',
      'Tokyo'

    ]

    const results =
    await Promise.all(

      destinations.map(
        async(destination)=>{

        const res =
        await fetch(

`https://api.unsplash.com/search/photos?query=${destination}&per_page=1&client_id=${process.env.UNSPLASH_ACCESS_KEY}`

        )

        const data =
        await res.json()

        return {

          name:destination,

          image:
          data.results?.[0]
          ?.urls?.regular,

          description:
          getDescription(destination)

        }

      })

    )

    return NextResponse.json({

      success:true,

      destinations:results

    })

  }catch(error){

    return NextResponse.json({

      success:false,

      message:error.message

    })

  }

}

function getDescription(
  destination
){

  const descriptions = {

    Maldives:
    'Crystal-clear waters, luxury overwater villas, and unforgettable island escapes.',

    Paris:
    'Romantic streets, iconic landmarks, and timeless European charm.',

    Bali:
    'Tropical beaches, jungle retreats, and spiritual tranquility.',

    Dubai:
    'Luxury shopping, futuristic skyscrapers, and desert adventures.',

    Switzerland:
    'Snow-covered Alps, scenic train journeys, and breathtaking landscapes.',

    Tokyo:
    'A vibrant blend of modern innovation and ancient traditions.'

  }

  return descriptions[
    destination
  ]

}