'use client'

export default function DeleteTourButton({
  id
}){

  const handleDelete = async()=>{

    const confirmDelete =
    confirm('Delete this tour?')

    if(!confirmDelete) return

    try{

      const res = await fetch(
        `/api/tours?id=${id}`,
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