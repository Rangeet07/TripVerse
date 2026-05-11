'use client'

export default function DeleteBookingButton({
  id
}){

  const handleDelete = async()=>{

    const confirmDelete =
    confirm('Delete booking?')

    if(!confirmDelete) return

    try{

      const res = await fetch(
        `/api/bookings?id=${id}`,
        {
          method:'DELETE'
        }
      )

      const data = await res.json()

      if(data.success){

        window.location.reload()

      }

    }catch(error){

      console.log(error)

    }

  }

  return (
    <button
      className="delete-btn"
      onClick={handleDelete}
    >
      Delete
    </button>
  )
}