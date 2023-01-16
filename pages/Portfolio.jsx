import React, { useEffect } from 'react'
// import Image from 'next/image'
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Portfolio = () => {
  useEffect(() => {

    AOS.init({
      duration: 800,
      offset: 140,
      anchorPlacement: 'top-bottom'

    })
  }, [])


  return (<>
    <div className="portfolio-body">
      <div className="portfolio-header">
        <div className="header-content" data-aos="fade-up">
          <h1 className="heading">
            Portfolio
          </h1>
          <p className="header-p">
            We are right here to help you to stand out from your competition with result-driven digital marketing strategies. Our innovative &amp; performance-driven strategies help transform our customers from market gamers to market leaders and, most importantly, hold them there.
          </p>
        </div>
      </div>
      <div className="branding-section">
        <div className="branding">
          <div className="branding-header">
            <div className="branding-logo">

            </div>
            <div className="branding-content" data-aos="fade-up">
              <div className="branding-heading">Branding</div>
              <hr />
              <div className="heading-line"></div>
            </div>

          </div>

          <div className="branding-cards">
            <div className="single-card" data-aos="fade-up">
              <img src="/CreativeHub-Work.gif" className='Image-fluid' width='500' height='500' />
              <h2 className="card-text">Branding</h2>
              <div className="color-layer"></div>
            </div>
            <div className="single-card" data-aos="fade-up">
              <img src="/CreativeHub-Work-1.gif" className='Image-fluid' width='500' height='500' />
              <h2 className="card-text">Logo-Animation</h2>
              <div className="color-layer"></div>
            </div>
            <div className="single-card" data-aos="fade-up">
              <img src="/CreativeHub-Work-3.gif" className='Image-fluid' width='500' height='500' />
              <h2 className="card-text">Branding-Video</h2>
              <div className="color-layer"></div>
            </div>
            <div className="single-card" data-aos="fade-up">
              <img src="/CreativeHub-Work-3.gif" className='Image-fluid' width='500' height='500' />
              <h2 className="card-text">Branding,Animated video</h2>
              <div className="color-layer"></div>
            </div>

          </div>
        </div>
      </div>
      <div className="branding-section">
        <div className="branding">
          <div className="branding-header">
            <div className="branding-logo">

            </div>
            <div className="webdesign-content" data-aos="fade-up">
              <div className="branding-heading">Creative Website Designs</div>
              <hr />
              <div className="heading-line"></div>
            </div>

          </div>

          <div className="branding-cards">
            <div className="single-card" data-aos="fade-up">
              <img src="/web-design.webp" className='Image-fluid' width='500' height='500' />
              {/* <h2 className="card-text">Branding</h2> */}
              <div className="color-layer"></div>
            </div>
            <div className="single-card" data-aos="fade-up">
              <img src="/web-design(2).webp" className='Image-fluid' width='500' height='500' />
              {/* <h2 className="card-text">Logo-Animation</h2> */}
              <div className="color-layer"></div>
            </div>



          </div>
        </div>
      </div>
      <div className="branding-section">
        <div className="branding">
          <div className="branding-header">
            <div className="branding-logo">

            </div>
            <div className="webdesign-content" data-aos="fade-up">
              <div className="branding-heading">Client SEO Results</div>
              <hr />
              <div className="heading-line"></div>
            </div>

          </div>

          <div className="branding-cards">
            <div className="single-card" data-aos="fade-up">
              <img src="/PORTFOLIO-SEO-3.gif" className='Image-fluid' width='500' height='500' />
              <h4 className="card-text">Executive Airport Transportation key word ranking</h4>
              <div className="color-layer"></div>
            </div>
            <div className="single-card" data-aos="fade-up">
              <img src="/PORTFOLIO-SEO-3.gif" className='Image-fluid' width='500' height='500' />
              <h4 className="card-text">Bussiness Accountant key word ranking</h4>
              <div className="color-layer"></div>
            </div>
            <div className="single-card" data-aos="fade-up">
              <img src="/PORTFOLIO-SEO-3.gif" className='Image-fluid' width='500' height='500' />
              <h4 className="card-text">SEO-Results and Google Shopping Ads</h4>
              <div className="color-layer"></div>
            </div>
            <div className="single-card" data-aos="fade-up">
              <img src="/PORTFOLIO-SEO-3.gif" className='Image-fluid' width='500' height='500' />
              <h4 className="card-text">Secret Asthetics SEO-Results</h4>
              <div className="color-layer"></div>
            </div>



          </div>
        </div>
      </div>
      <div className="branding-section">
        <div className="branding">
          <div className="branding-header">
            <div className="branding-logo">

            </div>
            <div className="webdesign-content" data-aos="fade-up">
              <div className="branding-heading">Google Shopping Ads Results</div>
              <hr />
              <div className="heading-line"></div>
            </div>

          </div>

          <div className="branding-cards">
            <div className="single-card" data-aos="fade-up">
              <img src="/Google-shopping-ads-experts.webp" className='Image-fluid' width='500' height='500' />
              {/* <h2 className="card-text">Branding</h2> */}
              <div className="color-layer"></div>
            </div>
            <div className="single-card" data-aos="fade-up">
              <img src="/Google-shopping-ads-experts.webp" className='Image-fluid' width='500' height='500' />
              {/* <h2 className="card-text">Logo-Animation</h2> */}
              <div className="color-layer"></div>
            </div>


          </div>
        </div>
      </div>


      <div className="branding-header">
        <div className="branding-logo">

        </div>
        <div className="branding-content" data-aos="fade-up">
          <div className="branding-heading">Trusted By</div>
          <hr />
          <div className="heading-line"></div>
        </div>

      </div>


      <div class="parent-trustcontainer">

        <div class="trustcontainer">
          <div class="trustcard" style={{ backgroundColor: "#6da7fb" }} data-aos="fade-up" >
            <img src="/icons8-web-development-64.png" alt="" width='50' height='50' />
            <p>Logo Text</p>
          </div>
          <div class="trustcard" style={{ backgroundColor: "#6da7fb" }} data-aos="fade-up">
            <img src="/icons8-web-development-64.png" alt="" width='50' height='50' />
            <p>Logo Text</p>
          </div>

          <div class="trustcard" style={{ backgroundColor: "#6da7fb" }} data-aos="fade-up" >
            <img src="/icons8-web-development-64.png" alt="" width='50' height='50' />
            <p>Logo Text</p>
          </div>

          <div class="trustcard" style={{ backgroundColor: "#6da7fb" }} data-aos="fade-up" >
            <img src="/icons8-web-development-64.png" alt="" width='50' height='50' />
            <p>Logo Text</p>
          </div>

          <div class="trustcard" style={{ backgroundColor: "#6da7fb" }} data-aos="fade-up" >
            <img src="/icons8-web-development-64.png" alt="" width='50' height='50' />
            <p>Logo Text</p>
          </div>

          <div class="trustcard" style={{ backgroundColor: "#6da7fb" }} data-aos="fade-up" >
            <img src="/icons8-web-development-64.png" alt="" width='50' height='50' />
            <p>Logo Text</p>
          </div>

          <div class="trustcard" style={{ backgroundColor: "#6da7fb" }} data-aos="fade-up" >
            <img src="/icons8-web-development-64.png" alt="" width='50' height='50' />
            <p>Logo Text</p>
          </div>
          <div class="trustcard" style={{ backgroundColor: "#6da7fb" }} data-aos="fade-up" >
            <img src="/icons8-web-development-64.png" alt="" width='50' height='50' />
            <p>Logo Text</p>
          </div>
          <div class="trustcard" style={{ backgroundColor: "#6da7fb" }} data-aos="fade-up" >
            <img src="/icons8-web-development-64.png" alt="" width='50' height='50' />
            <p>Logo Text</p>
          </div>
          <div class="trustcard" style={{ backgroundColor: "#6da7fb" }} data-aos="fade-up" >
            <img src="/icons8-web-development-64.png" alt="" width='50' height='50' />
            <p>Logo Text</p>
          </div>
          <div class="trustcard" style={{ backgroundColor: "#6da7fb" }} data-aos="fade-up" >
            <img src="/icons8-web-development-64.png" alt="" width='50' height='50' />
            <p>Logo Text</p>
          </div>
          <div class="trustcard" style={{ backgroundColor: "#6da7fb" }} data-aos="fade-up" >
            <img src="/icons8-web-development-64.png" alt="" width='50' height='50' />
            <p>Logo Text</p>
          </div>
          <div class="trustcard" style={{ backgroundColor: "#6da7fb" }} data-aos="fade-up" >
            <img src="/icons8-web-development-64.png" alt="" width='50' height='50' />
            <p>Logo Text</p>
          </div>
          <div class="trustcard" style={{ backgroundColor: "#6da7fb" }} data-aos="fade-up" >
            <img src="/icons8-web-development-64.png" alt="" width='50' height='50' />
            <p>Logo Text</p>
          </div>
          <div class="trustcard" style={{ backgroundColor: "#6da7fb" }} data-aos="fade-up" >
            <img src="/icons8-web-development-64.png" alt="" width='50' height='50' />
            <p>Logo Text</p>
          </div>
          <div class="trustcard" style={{ backgroundColor: "#6da7fb" }} data-aos="fade-up" >
            <img src="/icons8-web-development-64.png" alt="" width='50' height='50' />
            <p>Logo Text</p>
          </div>
          <div class="trustcard" style={{ backgroundColor: "#6da7fb" }} data-aos="fade-up" >
            <img src="/icons8-web-development-64.png" alt="" width='50' height='50' />
            <p>Logo Text</p>
          </div>
          <div class="trustcard" style={{ backgroundColor: "#6da7fb" }} data-aos="fade-up" >
            <img src="/icons8-web-development-64.png" alt="" width='50' height='50' />
            <p>Logo Text</p>
          </div>
          <div class="trustcard" style={{ backgroundColor: "#6da7fb" }} data-aos="fade-up" >
            <img src="/icons8-web-development-64.png" alt="" width='50' height='50' />
            <p>Logo Text</p>
          </div>
          <div class="trustcard" style={{ backgroundColor: "#6da7fb" }} data-aos="fade-up" >
            <img src="/icons8-web-development-64.png" alt="" width='50' height='50' />
            <p>Logo Text</p>
          </div>
        </div>
      </div>


      <div className="completed-projects">
        <div className="experience">
          <span>10+</span>
          <div className="experience-content">
            Years of Experience
          </div>
        </div>
        <div className="experience">
          <span>2k+</span>
          <div className="experience-content">
            Satisfied Clients
          </div>
        </div>
        <div className="experience">
          <span>2K+</span>
          <div className="experience-content">
            Completed Projects
          </div>
        </div>
      </div>

      <div className="gettowork">
        <div className="gif">
         <img src='/gettowork.gif' className='image-fluid' width='550' height='400'/>
        </div>
        <div className="gettowork-content">
          <p className='first'>Have a Project in mind? </p>
          <p className='second'>Lets get to Work </p>
        </div>
        <div className="gettowork-btn">
          <Link href='/Contact'>Book a FREE consultation</Link>
        </div>
      </div>
    </div>



  </>
  )
}

export default Portfolio