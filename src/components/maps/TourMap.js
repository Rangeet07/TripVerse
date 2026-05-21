export default function TourMap({
  location
}){

  return (

    <div
      style={{
        borderRadius:'24px',
        overflow:'hidden',
        marginTop:'40px'
      }}
    >

      <iframe
        src={`https://www.google.com/maps?q=${location}&output=embed`}
        width="100%"
        height="400"
        style={{
          border:0
        }}
        loading="lazy"
      />

    </div>

  )

}