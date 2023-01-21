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
              <img src="/images/CreativeHub-Work.gif" className='Image-fluid' width='500' height='500'
                alt='Image is Loading' />
              <h2 className="card-text">Branding</h2>
              <div className="color-layer"></div>
            </div>
            <div className="single-card" data-aos="fade-up">
              <img src="/images/CreativeHub-Work-1.gif" className='Image-fluid' width='500' height='500'
                alt='Image is Loading' />
              <h2 className="card-text">Logo-Animation</h2>
              <div className="color-layer"></div>
            </div>
            <div className="single-card" data-aos="fade-up">
              <img src="/images/CreativeHub-Work-3.gif" className='Image-fluid' width='500' height='500'
                alt='Image is Loading' />
              <h2 className="card-text">Branding-Video</h2>
              <div className="color-layer"></div>
            </div>
            <div className="single-card" data-aos="fade-up">
              <img src="/images/CreativeHub-Work-3.gif" className='Image-fluid' width='500' height='500' />
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
              <img src="/images/web-design.webp" className='Image-fluid' width='500' height='500'
                alt='Image is Loading' />
              {/* <h2 className="card-text">Branding</h2> */}
              <div className="color-layer"></div>
            </div>
            <div className="single-card" data-aos="fade-up">
              <img src="/images/web-design(2).webp" className='Image-fluid' width='500' height='500'
                alt='Image is Loading' />
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
              <img src="/images/PORTFOLIO-SEO-3.gif" className='Image-fluid' width='500' height='500'
                alt='Image is Loading' />
              <h4 className="card-text">Executive Airport Transportation key word ranking</h4>
              <div className="color-layer"></div>
            </div>
            <div className="single-card" data-aos="fade-up">
              <img src="/images/PORTFOLIO-SEO-3.gif" className='Image-fluid' width='500' height='500'
                alt='Image is Loading' />
              <h4 className="card-text">Bussiness Accountant key word ranking</h4>
              <div className="color-layer"></div>
            </div>
            <div className="single-card" data-aos="fade-up">
              <img src="/images/PORTFOLIO-SEO-3.gif" className='Image-fluid' width='500' height='500'
                alt='Image is Loading' />
              <h4 className="card-text">SEO-Results and Google Shopping Ads</h4>
              <div className="color-layer"></div>
            </div>
            <div className="single-card" data-aos="fade-up">
              <img src="/images/PORTFOLIO-SEO-3.gif" className='Image-fluid' width='500' height='500'
                alt='Image is Loading' />
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
              <img src="/images/Google-shopping-ads-experts.webp" className='Image-fluid' width='500' height='500' 
                alt='Image is Loading'/>
              {/* <h2 className="card-text">Branding</h2> */}
              <div className="color-layer"></div>
            </div>
            <div className="single-card" data-aos="fade-up">
              <img src="/images/Google-shopping-ads-experts.webp" className='Image-fluid' width='500' height='500'
                alt='Image is Loading' />
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
            <img src="/images/logo-1.webp"   alt='Image is Loading' width='50' height='50' />
            <p>Halal Freezers</p>
          </div>
          <div class="trustcard" style={{ backgroundColor: "#6da7fb" }} data-aos="fade-up">
            <img src="/images/naseems.webp"   alt='Image is Loading' width='50' height='50' />
            <p>Naseem Accountants</p>
          </div>

          <div class="trustcard" style={{ backgroundColor: "#6da7fb" }} data-aos="fade-up" >
            <img src="/images/fast (1).webp"   alt='Image is Loading' width='50' height='50' />
            <p>Fast fit MOT</p>
          </div>

          <div class="trustcard" style={{ backgroundColor: "#6da7fb" }} data-aos="fade-up" >
            <img src="/images/net.webp"   alt='Image is Loading' width='50' height='50' />
            <p>NET</p>
          </div>

          <div class="trustcard" style={{ backgroundColor: "#6da7fb" }} data-aos="fade-up" >
            <img src="/images/british.webp"   alt='Image is Loading' width='50' height='50' />
            <p>British cleaning services</p>
          </div>

          <div class="trustcard" style={{ backgroundColor: "#6da7fb" }} data-aos="fade-up" >
            <img src="/images/dhol-unit.webp"   alt='Image is Loading' width='50' height='50' />
            <p>DHOL unit</p>
          </div>

          <div class="trustcard" style={{ backgroundColor: "#6da7fb" }} data-aos="fade-up" >
            <img src="/images/isr.webp"   alt='Image is Loading' width='50' height='50' />
            <p>ISR</p>
          </div>
          <div class="trustcard" style={{ backgroundColor: "#6da7fb" }} data-aos="fade-up" >
            <img src="/images/khyl.webp"   alt='Image is Loading' width='50' height='50' />
            <p>Khyl</p>
          </div>
          <div class="trustcard" style={{ backgroundColor: "#6da7fb" }} data-aos="fade-up" >
            <img src="/images/estate.webp"   alt='Image is Loading' width='50' height='50' />
            <p>Extate drinks</p>
          </div>
          <div class="trustcard" style={{ backgroundColor: "#6da7fb" }} data-aos="fade-up" >
            <img src="/images/fruit.webp"  alt='Image is Loading' width='50' height='50' />
            <p>Fruitfull occasions</p>
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
         <img src='/images/gettowork.gif' className='image-fluid' width='550' height='400'
           alt='Image is Loading'/>
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