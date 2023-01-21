import Head from 'next/head'
import React, { useReducer, useState, useEffect } from 'react'
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css'




export default function Home() {
   



  const initialstate = <div className="content-services-click container" data-aos="fade-up">
  <div className="img-service-header mt-5">

    <img src="/images/1-4.webp" width="500" height="500"   alt='Image is Loading' className="img-fluid services-image" />
  </div>
  <div className="content-service-header  mt-5 ">
    <div className="content">

      <h2 className="service-header-heading" >Global analytic solution of fully-observed variational.</h2>
      <p>

        We provide services for analytic solution that helps our clients to make better decisions based on data. We have a team of experienced analysts who can help you to understand your data and draw insights from it. We offer a range of services such as data analysis, data visualization, and reporting. We can also help you to develop custom solutions that meet your specific needs.

      </p>
      <ul>
       


      </ul><Link href="/Contact" type="button" className="btn-more">Start Now</Link></div>
  </div>
</div>


const reducer = (state, action) => {
  if (action.type === 'Analytic_Solutions') {
    return (
      <>
        <div className="content-services-click container" data-aos="fade-up">
          <div className="img-service-header mt-5">

            <img src="/images/3-4.webp" width="500" height="500"   alt='Image is Loading' className="img-fluid services-image" />
          </div>
          <div className="content-service-header mt-5 ">
            <div className="content">

              <h2 className="service-header-heading" >Global analytic solution of fully-observed variational.</h2>
              <p>

                We provide services for analytic solution that helps our clients to make better decisions based on data. We have a team of experienced analysts who can help you to understand your data and draw insights from it. We offer a range of services such as data analysis, data visualization, and reporting. We can also help you to develop custom solutions that meet your specific needs.
              </p>
              <ul>


              </ul><Link href="/Contact" type="button" className="btn-more">Start Now</Link></div>
          </div>
        </div>
      </>
    )
  } else if (action.type === 'Risk_Management') {
    return (<>
      <div className="content-services-click container" data-aos="fade-up">
        <div className="img-service-header mt-5">

          <img src="/images/2-5.webp" width="500" height="500"   alt='Image is Loading' className="img-fluid services-image" />
        </div>
        <div className="content-service-header  mt-5 ">
          <div className="content">

            <h2 className="service-header-heading" >Collecting meaningful and real-time data &amp; Improve reporting</h2>
            <p>
              Risk management is an important part of any business and should be taken seriously if businesses hope to remain competitive and successful in today’s ever-evolving market environment. Effective risk management strategies can help organizations anticipate problems before they occur, create a better understanding of how risks could affect operations, plan for how to mitigate those risks, and understand how best to respond once the risky event has occurred.
            </p>
            <ul>


            </ul><Link href="/Contact" type="button" className="btn-more">Start Now</Link></div>
        </div>
      </div>

    </>)
  }
  else if (action.type === 'IT_Management') {
    return (<>

      <div className="content-services-click container" data-aos="fade-up">
        <div className="img-service-header mt-5">

          <img src="/images/1-4.webp" width="500" height="500"   alt='Image is Loading' className="img-fluid services-image" />
        </div>
        <div className="content-service-header  mt-5 ">
          <div className="content">

            <h2 className="service-header-heading" >Visualize & interprete data and present your findings.</h2>
            <p>

              An effective IT management strategy is crucial for any organization that relies heavily on technology. Without proper oversight, things can quickly get out of hand and lead to costly problems down the line. A good IT manager will have a deep understanding of all the different aspects of their job in order to make informed decisions about how to best keep everything running smoothly.
            </p>
            <ul>

            </ul><Link href="/Contact" type="button" className="btn-more">Start Now</Link></div>
        </div>
      </div>

    </>)
  }
}
const [state, dispatch] = useReducer(reducer, initialstate)
const [button, setButton] = useState("none");
const [button2, setButton2] = useState("none");
const [button3, setButton3] = useState("none");


const showlinks = () => {
  button === "none" ? setButton("block") : setButton("none")
}
const showlinks2 = () => {
  button2 === "none" ? setButton2("block") : setButton2("none")
}
const showlinks3 = () => {
  button3 === "none" ? setButton3("block") : setButton3("none")
}


useEffect(() => {

  AOS.init({
    duration: 800,
    offset: 160,
    anchorPlacement: 'top-bottom'
  }
  )
}, [])



  return (
    <>
      <Head>
        <title>kryptoserves</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/Logo 23.ico" />
      </Head>
            {/* body */}
            <div className="body">
        {/* header start */}
        <div className="bg-img ">
          <div class="layer">

            <div className="row container header-img ">
              <div className="col-lg-6 col-12 fheader-div" data-aos="fade-up">
                <div className="content">
                <div className="header-logo">
                    <img src="/images/logo.webp"   alt='Image is Loading' width='300' height='70' className='image-fluid'
                   />
                  </div>
                  <h4 className="wow fadeInUp" style={{ visibility: "visible" }}>Optimize IT Systems </h4>
                  <h2 className="wow fadeInDown" style={{ visibility: "visible" }}>Creating a better <strong>IT solutions</strong></h2>
                  
                  <p className="wow fadeInLeft" style={{ visibility: "visible" }}>
                    A software development company dedicated to creating innovative and cutting-edge technology solutions for businesses of all industries
                    
                  </p>
                  <Link className="btn btn-light" href="/" style={{ visibility: "visible" }}>Start Now</Link>
                </div>
              </div>
              <div className="col-lg-6 col-12  sheader-div" data-aos="fade-up" data-aos-offset="150">
                <div className='header-card'>
                  <div class="heading">
                    <h4>Appointment</h4>
                    
                  </div>
                  <form>



                    <input className="input-header" type="text" placeholder="enter your name" />


                    <input className="input-header" type="email" placeholder="enter your valid email" /><br />
                    <textarea name="comment" cols="20" rows="5" placeholder='comment'></textarea>
                    <br />
                    <button className='btn-header' name='submit'>submit </button>

                  </form>

                </div>

              </div>
            </div>
          </div>
        </div>
        {/* header end */}



        {/* services start */}
        <div className="services-div">
          <div className="services-box" data-aos="fade-up">
            <div className="services" >
              <div class="item">
                <div class="icon">
                  <img src='/images/icons8-digital-marketing-64.webp' width="70" height="70" alt='Image is Loading' />
                </div>
                <div className="link-pointer"> <h5><Link href="/Digital">Digital Marketing</Link></h5>
                </div>

                <p>
                  we provide comprehensive digital marketing services that utilize cutting-edge technology and tactics to reach your target audience with precision. Through SEO optimization, social media campaigns, content creation and email marketing we help businesses generate new leads, increase sales and build brand awareness.
                </p>
              </div>
            </div>
            <div className="services" >
              <div class="item">
                <div class="icon">
                  <img src='/images/icons8-seo-53.webp' width="70" height="70" alt='Image is Loading' />
                </div>
                <div className="link-pointer"> <h5><Link href="/SEO">SEO</Link></h5>
                </div>


                <p>
                  Search engine optimization (SEO) is the process of optimizing a website to increase its visibility in organic search engine results.By using strategies such as keyword research, content optimization, link building, and meta tag creation we can improve their ranking on major search engines like Google, Yahoo!, and Bing.

                </p>
              </div>
            </div>
            <div className="services" >
              <div class="item">
                <div class="icon">
                  <img src='/images/icons8-social-adds-64.webp' width="70" height="70" alt='Image is Loading' />
                </div>
                <div className="link-pointer">
                  <h5><Link href="/Socialmedia">Social Media Marketing</Link></h5>
                </div>


                <p>
                  From strategy to content creation, we'll help you connect with your audience and grow your business.
                  Our team of experts will work closely with you to develop a tailored strategy and create engaging content that will help you connect with your target audience and drive real results.
                </p>
              </div>
            </div>
            <div className="services" >
              <div class="item">
                <div class="icon">
                  <img src='/images/icons8-Ecomerce-64.webp' width="70" height="70" alt='Image is Loading' />
                </div>
                <div className="link-pointer">
                  <h5><Link href="/Eccomerce">Eccomerce</Link></h5>
                </div>


                <p>
                  Welcome to our eCommerce services company. We understand that today's business world is more digital than ever before. That's why we are here to help you take your business online, and sell your products and services to a global audience.
                </p>
              </div>
            </div>
            <div className="services" >
              <div class="item">
                <div class="icon">
                  <img src='/images/icons8-app-development-64.webp' width="70" height="70" alt='Image is Loading' />
                </div>
                <div className="link-pointer">
                  <h5><Link href="/Appdev">App Development</Link></h5>
                </div>


                <p>
                  Bring your app idea to life with our expert app development services. Our team of skilled developers and designers will work closely with you to create a custom app that not only meets your needs, but exceeds your expectations. Whether you're looking to build a new app from scratch or update an existing one, we've got you covered.
                </p>
              </div>
            </div>
            <div className="services" >
              <div class="item">
                <div class="icon">
                  <img src='/images/icons8-web-development-64.webp' width="70" height="70" alt='Image is Loading' />
                </div>
                <div className="link-pointer">
                  <h5><Link href="/Webdev">Website Development</Link></h5>
                </div>


                <p>
                  Web development is the process of creating or maintaining a website or web application. It involves a variety of tasks, such as planning, design, coding, testing, security, content management and support. Web developers are responsible for building websites that are visually appealing, functional and secure.
                </p>
              </div>
            </div>
            <div className="services" >
              <div class="item">
                <div class="icon">
                  <img src='/images/icons8-graphic-design-64.webp' width="70" height="70" alt='Image is Loading' />
                </div>
                <div className="link-pointer">
                  <h5><Link href="/Graphic">Graphics Designing</Link></h5>
                </div>


                <p>
                  GRAPHIC DESIGNING SERVICES provide professional assistance in the development and implementation of creative graphic designs. Our services encompass a wide range of design activities, from creating logos and illustrations to web design, marketing materials, corporate identity development, and even branding.
                </p>
              </div>
            </div>
            <div className="services" >
              <div class="item">
                <div class="icon">
                  <img src='/images/icons8-video-editing-66.webp' width="70" height="70" alt='Image is Loading' />
                </div>
                <div className="link-pointer">
                  <h5><Link href="/Graphic">Video Editing</Link></h5>
                </div>


                <p>
                  As a service provider for vedio editing, we offer a wide range of services to our clients. We can help with anything from basic editing tasks to more complex projects. No matter what your needs are, we will work with you to ensure that your vedio project is a success.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* services end */}



        {/*  works-about start */}
        <div className="worksabout">

          <div className="innerdiv-works">
            <div class="info" data-aos="fade-up">
              <h5>Works About</h5>
              <h2>Trusted by 5,000+
                <br />
                Happy Customers</h2>
              <p>
                Our software development company has a wealth of experience in delivering solutions for clients across a wide range of industries. From designing and developing custom applications for large enterprise clients to creating seamless e-commerce platforms for small businesses, our team has a proven track record of success.
              </p>
              <ul>
                <li>
                  <h5>100% Client Satisfaction</h5>
                </li>
                <li>
                  <h5>World Class Worker</h5>
                </li>
              </ul><Link href="https://wordpressriverthemes.com/tanda/case-studies-version-one-2/" class="btn btn-theme effect btn-sm">Completed Projects</Link>
            </div>
            <div class="worksabout-pics" data-aos="fade-up">
              <div class="thumb">
                <img src="/images/3.webp" width="700" height="700" alt='Image is Loading' className='img-fluid' />
                <div class="fun-fact">
                  <div class="timer" data-to="875" data-speed="5000">875</div>
                  <span class="medium">Completed Projects</span>
                </div>
              </div>
            </div>
          </div>


        </div>
        {/* works-about section end */}

        {/* why choose us start */}
        <div className="bg-img2">
          <div className="choose-main p-5" data-aos="fade-up">
            <div className="data-choose">
              <h5>Why choose us</h5>
              <h2>We Provide Outsourced IT Services
                For your business</h2>
            </div>
            <div className="plybtn">
              <div className="playbtn col-sm-3 col-xm-12 mb-5">
                <button
                  type="button"
                  className="pbtn fa-solid fa-play"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  name='play'
                ></button>
              </div>

            </div>
          </div>



          {/* <!-- Modal --> */}
          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-xl">
              <div
                className="modal-content modalbg"
                style={{ height: "100vh", background: "none" }}
              >
                <div className="modal-header" style={{ borderBottom: "none" }}>
                  <button
                    type="button"
                    className="btn-close bg-white"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    name='btn-close'
                  ></button>
                </div>
                <div className="modal-body">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/At4B7A4GOPg"
                    strategy="lazyOnload"
                    title="Responsive Navbar Tutorial"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-cards">
            <div className="contact-card" data-aos="fade-up" data-aos-offset="100">
              <div class="info">
                <h4>24/7 Customer support</h4>
                <p>
                  Our 24/7 Customer Support representatives will work closely with you to address any issues or inquiries you may have in a timely manner, ensuring all your needs are met quickly and efficiently. Additionally .customers can reach out to us directly, without having to wait on hold or on the phone for an extended period of time.
                </p>
                <div class="call">
                  <div class="icons">
                    <i class="fas fa-phone"></i>
                  </div>
                  <div class="info">
                    <span>Helpline</span> +123 456 7890
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-card" data-aos="fade-up" data-aos-offset="100">
              <div class="info">
                <h4>Smart Solutions</h4>
                <p>
                  We understand the complexities of today’s competitive markets, which is why our team specializes in developing dynamic strategies that address emerging trends and demands. Our comprehensive approach ensures that all facets of the customer journey are taken into account, from acquisition through retention.
                </p>
                <div class="call">
                  <div class="icons">
                    <i class="fas fa-phone"></i>
                  </div>
                  <div class="info">
                    <span>Helpline</span> +123 456 7890
                  </div>
                </div>
              </div>
            </div>
          </div>



        </div>
        {/* why choose us end */}

        {/* what we do start */}

        <div className="services-home">
          <h2 className='service-heading'>Service</h2>
          <h4>What We Do?</h4>
          <div className="button-service" data-aos="fade-up">
            <div className="service-header-btns"> <button type="button" name='whatwedo' onClick={() => dispatch({ type: 'IT_Management' })} className="btn mx-3 btn-service-headers   btn-primary  mt-3">IT Management</button></div>
            <div className="service-header-btns"> <button type="button" name='whatwedo' onClick={() => dispatch({ type: 'Analytic_Solutions' })} className="btn mx-3  btn-service-headers  btn-primary  mt-3">Analytic Solutions</button></div>
            <div className="service-header-btns"> <button type="button" name='whatwedo' onClick={() => dispatch({ type: 'Risk_Management' })} className="btn mx-3 btn-service-headers  btn-primary  mt-3">Risk Management</button></div>




          </div>

          {state}

        </div>

        {/* what we do end */}




        {/* team-section start */}
        <div className="team-section">
          <div className="cntainer">
            <div class="team-heading ">
              <h4>EXPERT TEAM</h4>
              <h2>Meet Our Leadership</h2>
            </div>
            <div className="team-cards">
              <div class="single-item " data-aos="fade-up">
                <div class="item">
                  <div class="thumb">
                    <img src="/images/usamaKhalid.webp" width="300" height="300" alt='Image is Loading' />
                    <div class="social">

                      <label class="share-button" onClick={showlinks}>
                        <i class="fas fa-plus"></i>
                      </label>
                      <div className="a-tags" style={{ display: button }}  >
                        <Link href="#" class="facebook">
                          <i class="fab fa-facebook-f"></i>
                        </Link>
                        <Link href="#" class="twitter">
                          <i class="fab fa-twitter"></i>
                        </Link>
                        <Link href="#" class="instagram">
                          <i class="fab fa-instagram"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div class="info">
                    <h4><Link href="https://wordpressriverthemes.com/tanda/team-single/">Usama khalid</Link></h4>
                    <span>Director</span>
                  </div>
                </div>
              </div>
              <div class="single-item " data-aos="fade-up">
                <div class="item">
                  <div class="thumb">
                    <img src="/images/mAhsan.webp" width="300" height="300" alt='Image is Loading' />
                    <div class="social">

                      <label class="share-button" onClick={showlinks2}>
                        <i class="fas fa-plus"></i>
                      </label>
                      < div className="a-tags" style={{ display: button2 }} >
                        <Link href="#" class="share-icon facebook">
                          <i class="fab fa-facebook-f"></i>
                        </Link>
                        <Link href="#" class="share-icon twitter">
                          <i class="fab fa-twitter"></i>
                        </Link>
                        <Link href="#" class="share-icon instagram">
                          <i class="fab fa-instagram"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div class="info">
                    <h4><Link href="https://wordpressriverthemes.com/tanda/team-single/">M.Ahsan</Link></h4>
                    <span>Freelancer</span>
                  </div>
                </div>
              </div>
              <div class="single-item " data-aos="fade-up">
                <div class="item">
                  <div class="thumb">
                    <img src="/images/shahanAzam.webp" width="300" height="300" alt='Image is Loading' />
                    <div class="social">

                      <label class="share-button" onClick={showlinks3}>
                        <i class="fas fa-plus"></i>
                      </label>
                      < div className="a-tags" style={{ display: button3 }}  >
                        <Link href="#" class="share-icon facebook">
                          <i class="fab fa-facebook-f"></i>
                        </Link>
                        <Link href="#" class="share-icon twitter">
                          <i class="fab fa-twitter"></i>
                        </Link>
                        <Link href="#" class="share-icon instagram">
                          <i class="fab fa-instagram"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div class="info">
                    <h4><Link href="https://wordpressriverthemes.com/tanda/team-single/">Shahan azam</Link></h4>
                    <span>Director Admin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* team-section end */}

        {/* about start */}
        <div className="about">
          <div className="about-container">
            <div className="about-pics" data-aos="fade-up">

              <div class="thumb">
                <img src="/images/1.webp" width="300" height="300" alt='Image is Loading' />
                <img src="/images/2.webp" width="300" height="300" alt='Image is Loading' />
                <div class="overlay">
                  <div class="content">
                    <h4>20 years of experience</h4>
                  </div>
                </div>
              </div>

            </div>
            <div class="about-info" data-aos="fade-up">
              <h2>We Help IT Companies Scale Engineering Capacity</h2>
              <p>
                Our software development company has a strong history of collaborating with other companies to deliver joint solutions. We have experience working with partners from a variety of industries to co-develop software, integrate our technology with theirs, and provide consulting services. This kind of collaboration allows us to bring new perspectives and expertise to the table, resulting in more innovative and effective solutions for our clients. We are always open to new partnerships and opportunities to work with other companies to drive success.
              </p>

            </div>


          </div>


        </div>
        {/* about start */}







      </div>
    </>
  )
}
