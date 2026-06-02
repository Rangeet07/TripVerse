
import './admin.css'
export default function Loading() {
  return (
    <div
      style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        minHeight:'60vh'
      }}
    >
      <div className="loader" />
    </div>
  )
}

