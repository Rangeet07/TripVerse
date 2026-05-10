import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageBanner from '@/components/shared/PageBanner'

export default function ContactPage() {

  return (
    <main>

      <Navbar />

      <PageBanner
        title="Contact Us"
        subtitle="We would love to hear from you."
      />

      <section style={{padding:'80px 5%'}}>

        <div className="container">

          <form
            style={{
              display:'flex',
              flexDirection:'column',
              gap:'20px',
              maxWidth:'600px'
            }}
          >

            <input
              type="text"
              placeholder="Your Name"
              style={{
                padding:'15px',
                borderRadius:'12px',
                border:'1px solid #ddd'
              }}
            />

            <input
              type="email"
              placeholder="Your Email"
              style={{
                padding:'15px',
                borderRadius:'12px',
                border:'1px solid #ddd'
              }}
            />

            <textarea
              placeholder="Message"
              rows="5"
              style={{
                padding:'15px',
                borderRadius:'12px',
                border:'1px solid #ddd'
              }}
            />

            <button
              style={{
                padding:'15px',
                border:'none',
                borderRadius:'12px',
                background:'#00b894',
                color:'white',
                cursor:'pointer'
              }}
            >
              Send Message
            </button>

          </form>

        </div>

      </section>

      <Footer />

    </main>
  )
}