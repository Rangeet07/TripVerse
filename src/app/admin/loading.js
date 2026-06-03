
import './admin.css'
// export default function Loading() {
//   return (
//     <div
//       style={{
//         display:'flex',
//         justifyContent:'center',
//         alignItems:'center',
//         minHeight:'60vh'
//       }}
//     >
//       <div className="loader" />
//     </div>
//   )
// }

export default function Loading() {
  return (
    <div>

      <h1
        style={{
          marginBottom:'30px'
        }}
      >
        Loading Dashboard...
      </h1>

      <div className="dashboard-grid">

        <div className="dashboard-skeleton"></div>

        <div className="dashboard-skeleton"></div>

        <div className="dashboard-skeleton"></div>

      </div>

      <div
        style={{
          marginTop:'30px'
        }}
      >

        <div
          className="booking-skeleton"
        ></div>

        <div
          className="booking-skeleton"
        ></div>

        <div
          className="booking-skeleton"
        ></div>

      </div>

    </div>
  )
}