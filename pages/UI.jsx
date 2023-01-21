import React from 'react'
// import webimg from './UI-UX.jpg'
// import './ui.css'
import Link from 'next/link'
// import Image from 'next/image'


function UI() {
  return (
    <div className='web-body'>
    <div className="web-heading"><h2>UI/UX</h2></div>
    <div className="web-maincontainer">

      <div className="web-container">
        <div className="web-intro">
          <div className="web-writing">
            <h2>UI/UX</h2>
            <p>As a service provider for vedio editing, we offer a wide range of services to our clients. We can help with anything from basic editing tasks to more complex projects. No matter what your needs are, we will work with you to ensure that your vedio project is a success.</p>
           
            <ul className='frameworks'>
            
              <li>Adobe premium pro</li>
              <li>Davinci Resolve</li>
              <li>Filmora</li>
              <li>Finsl Cut pro</li>
              {/* <li></li> */}
            </ul>
          </div>
          <div className="web-logo">
          <img className='web-img' src='/images/UI-UX.webp'   alt='Image is Loading'
               width='400' height='400'
              />
          </div>
        </div>
        <div className="web-cards">
          <div className="web-singlecards-one">
            <div class="pricing_header">
              <h4 class="pricing_title" style={{ borderColor: "#ff7d00;" }}>Bronze</h4>
              <div class="pricing_price_wrap"><span class="pricing_cur">$</span>
                <div class="pricing_price">100</div>
              </div>
            </div>
            <div class="pricing_content">
              <ul>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>1 Page/Screen</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Prototype</strong></span></li>
              
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Source File</strong></span></li>
              
              </ul>
            </div>
            <div className="buynow-btn">
            <div class="card-btn"><Link href='/Contact'>Buy Now</Link>
             </div>
             </div>
          </div>
          <div className="web-singlecards-two">
            <div class="pricing_header">
              <h4 class="pricing_title" style={{ borderColor: "#ff7d00;" }}>Silver</h4>
              <div class="pricing_price_wrap"><span class="pricing_cur">$</span>
                <div class="pricing_price">200</div>
              </div>
            </div>
            <div class="pricing_content">
              <ul>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>4 Page/Screen</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Prototype</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Source File</strong></span></li>
                
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
              >Gold</h4>
              <div class="pricing_price_wrap" style={{ marginBottom:'4px' }}>
                <span class="pricing_cur">$</span>
                <div class="pricing_price">300</div>
              </div>
            </div>
            <div class="pricing_content">
              <ul>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>10 Page/Screen</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Responsive Design</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Prototype</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Source File</strong></span></li>
               
                
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

export default UI