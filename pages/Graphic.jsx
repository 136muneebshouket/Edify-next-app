import React from 'react'
// import './Graphic.css'
// import webimg from './Branding.jpg'
import Link from 'next/link'
// import Image from 'next/image'

function Graphic() {
  return (
    <div className='web-body'>
      <div className="web-heading"><h2>Graphic-Designing</h2></div>
      <div className="web-maincontainer">

        <div className="web-container">
          <div className="web-intro">
            <div className="web-writing">
              <h2>Graphic-Designing</h2>
              <p>GRAPHIC DESIGNING SERVICES provide professional assistance in the development and implementation of creative graphic designs. Our services encompass a wide range of design activities, from creating logos and illustrations to web design, marketing materials, corporate identity development, and even branding.</p>
             
              <ul className='frameworks'>
                <li> <span className='reactjs'>React.js</span> and <span className='nextjs'>Next.js </span> Development</li>
                <li>Illustrator</li>
                <li>Adobe Photoshop</li>
                <li>Premium pro</li>
                <li>Coral Draw</li>
                {/* <li></li> */}
              </ul>
            </div>
            <div className="web-logo">
            <img className='web-img' src='/Branding.jpg' alt=""
               width='400' height='400'
              />
            </div>
          </div>
          <div className="web-cards">
            <div className="web-singlecards-one">
              <div class="pricing_header">
                <h4 class="pricing_title" style={{ borderColor: "#ff7d00;" }}>Bronze</h4>
                <div class="pricing_price_wrap"><span class="pricing_cur">$</span>
                  <div class="pricing_price">499</div>
                </div>
              </div>
              <div class="pricing_content">
                <ul>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Up to 4 Unique Pages</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Search Engine Optimized</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Contact Form</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>2 Rounds of Revisions</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>$150 Per Additional Website Page</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>100% Satisfaction Guarantee</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Mobile Responsive</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Social Media Integration</strong></span></li>
                </ul>
              </div>
              <div className="buynow-btn">
              <div class="card-btn"><Link href='/Contact'>Buy Now</Link>
               </div>
               </div>
            </div>
            <div className="web-singlecards-two">
              <div class="pricing_header">
                <h4 class="pricing_title" style={{ borderColor: "#ff7d00;" }}>Bronze</h4>
                <div class="pricing_price_wrap"><span class="pricing_cur">$</span>
                  <div class="pricing_price">499</div>
                </div>
              </div>
              <div class="pricing_content">
                <ul>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Up to 8 Unique Pages</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Search Engine Optimized</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Contact Form</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Complementery Privacy Policy</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Speed Optemized</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Email Signup</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Search Bar</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>2 Rounds of Revisions</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>$150 Per Additional Website Page</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>100% Satisfaction Guarantee</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Mobile Responsive</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Social Media Integration</strong></span></li>
                </ul>
              </div>
              <div className="buynow-btn">
              <div class="card-btn"><Link href='/Contact'>Buy Now</Link>
               </div>
               </div>
            </div>
            <div className="web-singlecards-three">
              <div class="pricing_header">
                <h4 class="pricing_title"
                // style={{ borderColor: "#ff7d00"}}
                >Bronze</h4>
                <div class="pricing_price_wrap"><span class="pricing_cur">$</span>
                  <div class="pricing_price">499</div>
                </div>
              </div>
              <div class="pricing_content">
                <ul>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Up to 10 Unique Pages</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Mobile Responsive</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Eccomerce integration</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Live Chat Setup</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Social Media Integration</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Search Engine Optimization</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Complementery Privacy Policy</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Speed Optimization</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Email Signup</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Search Bar</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Contact Form</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>2 Rounds of Revisions</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>$150 Per Additional Website Page</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>100% Satisfaction Guarantee</strong></span></li>
                  
                </ul>
              </div>
              <div className="buynow-btn">
              <div class="card-btn"><Link href='/Contact'>Buy Now</Link>
               </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Graphic