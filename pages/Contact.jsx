import React,{useRef,useState} from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';


function Contact() {

  const [alert, setAlert] = useState('');

 const form=useRef();

 const send_email = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_jti7i5m', 'template_4jxacxo', form.current, 'Tv4TC7uMYr42yFdGZ')
    .then((result) => {
        console.log(result.text);
        if(result.text=='OK'){
          setAlert(<div class="alert alert-success" role="alert">
          This is a success alert—check it out!
        </div>);
        setTimeout(()=>{
          setAlert('')
        },3000)
        }
    }, (error) => {
        console.log(error.text);
        setAlert(<div class="alert alert-danger" role="alert">
        This is a danger alert—check it out!
      </div>);
       setTimeout(()=>{
        setAlert('')
      },3000)
    });
    e.target.reset();
};

  return (
    <>
      <div>
        {/* <body> */}
        <div className="immage">
          <div className="layer-immage">
          <div className="heading-row">
            <div className="heading-column">
              <h3 className="page-heading"
              >Contact Us</h3>
              <p>The support team is here to help you</p>
            </div>
            <div className="connected-container">
              <h3 className="connected" style={{ color:'white' }}>Get connected</h3>
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
        </div>
        <div className="section-address">
          <div className="address-col">
            <div className="box">
              <div>
                <i
                  style={{ backgroundColor: "#fb6f6c" }}
                  //   style="background-color: #fb6f6c"
                  className="fa-solid fa-location-dot"
                ></i>
              </div>

              <div className="info">
                <p className="bold">ADDRESS</p>
                <h2>Head Office</h2>
                <p className='adress'>717 K Street, STE 207 Sacramento,CA 95814, United State</p>
              </div>
            </div>
            <div className="box">
              <div>
                <i
                  style={{ backgroundColor: "#3acdb5" }}
                  className="fa-solid fa-phone"></i>
              </div>
              <div className="info">
                <p className="bold">PHONE</p>

                <div className="inner-info">
                  <div className='sale'>
                    <h2>Sale:</h2>
                    <p>+1 443-741-1187</p>
                  </div>
                  <div>
                    <h3>For Careers:</h3>
                    <p>+1 443-741-1187</p>
                  </div>
                </div>


              </div>

            </div>
            <div className="box">
              <div>
                <i
                  style={{ backgroundColor: "#00a6e6" }}
                  // style="background-color: #00a6e6"
                  className="fa-brands fa-skype"></i>
              </div>
              <div className="info">
                <p className="bold">SKYPE</p>
                <h2>Head Office</h2>
                <p>Kryptoserves</p>
              </div>
            </div>
            <div className="box">
              <div>
                <i
                  style={{ backgroundColor: "#5d74d3" }}
                  //   style="background-color: #5d74d3"
                  className="fa-regular fa-envelope"
                ></i>
              </div>

              <div className="info">
                <p className="bold">EMAIL</p>

                <p>kryptoservs@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="address-form">
            <form action="" ref={form} onSubmit={send_email} >
              <div className="form-row">
                <div className="form-control">
                  <label for="">Name</label>
                  <input type="text" placeholder="Type your name" name='user_name' />
                </div>
                <div className="form-control">
                  <label for="">Email</label>
                  <input type="email" name='user_email' placeholder="Type your email" />
                </div>
              </div>
              <div className="form-row">
                {/* <div className="form-control">
                  <label for="">Skype</label>
                  <input type="text" placeholder="Type your skype ID" />
                </div> */}
                <div className="form-control">
                  <label for="">Phone</label>
                  <input type="number" name='user_number' placeholder="Type your phone" />
                </div>
                
              </div>
              <div className="form-rowtwo">
              <div className="form-control">
                  <label for="">In Which Service You are Interested</label>
                  <select name="services" id="services">
                    <option value="Website-development">Website-development</option>
                    <option value="Mobile-development">Mobile-development</option>
                    <option value="SEO">SEO</option>
                    <option value="Digital-Marketing">Digital-Marketing</option>
                    <option value="Graphic-Designing">Graphic-Designing</option>
                    <option value="UI/UX">UI/UX</option>
                    <option value="Eccomerce">Eccomerce</option>
                    <option value="Social-media-marketing">Social-media-marketing</option>
                  </select>
                </div>
                <div className="form-control w-full">
                  <label for="">How can we help you?</label>
                  <textarea
                    name='user_comment'
                    id=""
                    placeholder="Give use some details your project"
                    rows="10"
                  ></textarea>
                </div>
              </div>
              <div className="terms">
                <input type="checkbox" name="" id="" />
                <label for=""
                >I agree to recieve marketing communication from kryptoserves by
                  e-mail.</label
                >
              </div>
               {alert}
              <button className="form-btn" type="submit">Get An Estimate</button>
            </form>
          </div>
        </div>

        <div className="last-box">
          <h1 className="logo-box">What Happen Next?</h1>
          <div className="logos-boxs">
            <div className="Image1">
              <img src="/images/image-1.webp" alt='Image is Loading' height="100" width="100" />
              <p className="grey">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                reprehenderit. Velit debitis unde temporibus repellat quis?
              </p>
            </div>
            <div className="Image1" >
              <img src="/images/image2.webp" height="100" width="100" className="Image-2" alt='Image is Loading'
             
              />
              <p className="grey">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                reprehenderit. Velit debitis unde temporibus repellat quis?
              </p>
            </div>
            <div className="Image1" >
              <img src="/images/image-3.webp" height="100" width="100"
               alt='Image is Loading'
              />
              <p className="grey">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                reprehenderit. Velit debitis unde temporibus repellat quis?
              </p>
            </div>
          </div>
        </div>
       
      </div>
    </>
  )
}

export default Contact