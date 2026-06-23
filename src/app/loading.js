// app/loading.js

import './loading.css'

export default function Loading() {
  return (
    <div className="page-loader">
      <div className="loader-logo">
        Travel<span>Go</span>
      </div>

      <div className="loader-line"></div>

      <p>Preparing your next adventure...</p>
    </div>
  )
}