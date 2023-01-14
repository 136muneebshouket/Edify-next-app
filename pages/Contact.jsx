import React from 'react';
// import './contact.css'
import Image from 'next/image';
import Link from 'next/link';
// import Image1 from './'

function Contact() {
  return (
  <>
  <div>
    {/* <body> */}
    <div className="immage">
      <div className="heading-row">
        <div className="heading-column">
          <h3 className="page-heading">Contact Us</h3>
          <p>The support team is here to help you</p>
        </div>
        <div className="connected-container">
          <h3 className="connected">Get connected</h3>
          <div className="socials">
            <Link href="">
              <i
            //    style="margin: 5px;"
               className="fa-brands fa-github"></i>
            </Link>
            <Link href="">
              <i 
            //   style="margin: 5px;" 
              className="fa-brands fa-instagram"></i>
            </Link>
            <Link href="">
              <i
            //    style="margin: 5px;" 
              className="fa-brands fa-facebook"></i>
            </Link>
            <Link href="">
              <i 
            //   style="margin: 5px;"
               className="fa-brands fa-linkedin"></i>
            </Link>
            <Link href="">
              <i 
            //   style="margin: 5px;"
               className="fa-brands fa-twitter"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="section-address">
      <div className="address-col">
        <div className="box">
          <div>
            <i
             style={{backgroundColor :"#fb6f6c"}}
            //   style="background-color: #fb6f6c"
              className="fa-solid fa-location-dot"
            ></i>
          </div>

          <div className="info">
            <p className="bold">ADDRESS</p>
            <h2>Head Office</h2>
            <p>717 K Street, STE 207 Sacramento,CA 95814, United State</p>
          </div>
        </div>
        <div className="box">
          <div>
            <i
             style={{backgroundColor :"#3acdb5"}}
             className="fa-solid fa-phone"></i>
          </div>
          <div className="info">
            <p className="bold">PHONE</p>
         
            <div className="inner-info">
            <div>
              <h2>Sale:</h2>
            <p>+92 4344 7374</p>
            </div>
            <div> 
               <h3>For Careers:</h3>
            <p>+92437634746</p>
            </div>
            </div>
        
           
          </div>
         
        </div>
        <div className="box">
          <div>
            <i 
            style={{backgroundColor :"#00a6e6"}}
            // style="background-color: #00a6e6"
             className="fa-brands fa-skype"></i>
          </div>
          <div className="info">
            <p className="bold">SKYPE</p>
            <h2>Head Office</h2>
            <p>TechloSEt</p>
          </div>
        </div>
        <div className="box">
          <div>
            <i
               style={{backgroundColor :"#5d74d3"}}
            //   style="background-color: #5d74d3"
              className="fa-regular fa-envelope"
            ></i>
          </div>

          <div className="info">
            <p className="bold">EMAIL</p>

            <p>info@edify.com</p>
          </div>
        </div>
      </div>
      <div className="address-form">
        <form action="">
          <div className="form-row">
            <div className="form-control">
              <label for="">Name</label>
              <input type="text" placeholder="Type your name" />
            </div>
            <div className="form-control">
              <label for="">Email</label>
              <input type="email" placeholder="Type your email" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-control">
              <label for="">Skype</label>
              <input type="text" placeholder="Type your skype ID" />
            </div>
            <div className="form-control">
              <label for="">Phone</label>
              <input type="text" placeholder="Type your phone" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-control w-full">
              <label for="">How can we help you?</label>
              <textarea
                name=""
                id=""
                placeholder="Give use some details your project"
                rows="10"
              ></textarea>
            </div>
          </div>
          <div className="terms">
            <input type="checkbox" name="" id="" />
            <label for=""
              >I agree to recieve marketing communication from TechloSet by
              e-mail.</label
            >
          </div>
          <button className="form-btn">Get An Estimate</button>
        </form>
      </div>
    </div>

    <div className="last-box">
      <h1 className="logo-box">What Happen Next?</h1>
      <div className="logos-boxs">
        <div className="Image1">
          <Image src="/image-1.webp" alt="" height="100" width="100" />
          <p className="grey">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            reprehenderit. Velit debitis unde temporibus repellat quis?
          </p>
        </div>
        <div className="Image1" >
          <Image src="/image2.webp" height="100" width="100" className="Image-2" alt=""
        //    height="100px" 
        //    width="100px" 
        //    style="margin: auto;" 
           />
          <p className="grey">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            reprehenderit. Velit debitis unde temporibus repellat quis?
          </p>
        </div>
        <div className="Image1" >
          <Image src="/image-3.png" height="100" width="100"
        //   alt="" height="100px" 
        //   width="100px" 
        //   style="margin: auto;"
          />
          <p className="grey">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            reprehenderit. Velit debitis unde temporibus repellat quis?
          </p>
        </div>
      </div>
    </div>
  {/* </body> */}
  </div>
  </>
  )
}

export default Contact