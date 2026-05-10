import './PageBanner.css'

export default function PageBanner({
  title,
  subtitle
}) {

  return (
    <section className="page-banner">

      <div className="banner-overlay">

        <div className="container">

          <h1>{title}</h1>

          <p>{subtitle}</p>

        </div>

      </div>

    </section>
  )
}