import React from 'react'
// import webimg from './web-development.jpg'
// import './digital.css'
import Image from 'next/image'


function Digital() {
  return (
    <div className='web-body'>
    <div className="web-heading"><h2>Digital-Marketing</h2></div>
    <div className="web-maincontainer">

      <div className="web-container">
        <div className="web-intro">
          <div className="web-writing">
            <h2>Digital-Marketing</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui est officia dolor vitae, quibusdam unde quae voluptatibus debitis itaque. Rerum labore nobis deserunt? Esse pariatur ullam dolores eligendi inventore earum.Lorem ipsum.</p>
           
            <ul className='frameworks'>
              <li> <span className='reactjs'>React.js</span> and <span className='nextjs'>Next.js </span> Development</li>
              <li>PHP Development</li>
              <li>Wordpress Development</li>
              <li>Custom Development</li>
              {/* <li></li> */}
            </ul>
          </div>
          <div className="web-logo">
          <Image className='web-img' src='/web-development.jpg' alt=""
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
            <div class="card-btn"><a href="#">Buy Now</a>
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
            <div class="card-btn"><a href="#">Buy Now</a>
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
            <div class="card-btn"><a href="#">Buy Now</a>
             </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  )
}

export default Digital