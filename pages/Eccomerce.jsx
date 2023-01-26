import React from 'react'

import Link from 'next/link'



function Eccomerce() {
  return (
    <div className='web-body'>
    <div className="web-heading"><h2>Eccomerce</h2></div>
    <div className="web-maincontainer">

      <div className="web-container">
        <div className="web-intro">
          <div className="web-writing">
            <h2>Ecommerce</h2>
            <p>Welcome to our eCommerce services company. We understand that today's business world is more digital than ever before. That's why we are here to help you take your business online, and sell your products and services to a global audience.</p>
           
            <ul className='frameworks'>
              <li> Technology and market entry consulting</li>
              <li>Business optimization and operational consulting</li>
              <li>Ecommerce Development Services</li>
              <li>Support and Maintenance Services</li>
              {/* <li></li> */}
            </ul>
          </div>
          <div className="web-logo">
          <img className='web-img' src='/images/web-development.webp' alt='Image is Loading'
               width='400' height='400'
              />
          </div>
        </div>
        <div className="web-cards">
          <div className="web-singlecards-one">
            <div class="pricing_header">
              <h4 class="pricing_title" style={{ borderColor: "#ff7d00;" }}>Bronze</h4>
              <div class="pricing_price_wrap"><span class="pricing_cur">$</span>
                <div class="pricing_price">200</div>
              </div>
            </div>
            <div class="pricing_content">
              <ul>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Guiding an optimal ecommerce platform.</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Improving stalled business workflows.</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Planning a cross-system landscape.</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Wireframing and prototyping.</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Usability testing.</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Forming a UI kit to reflect your brand.</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Bringing all the functional requirements planned.</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Front-end and back-end development.</strong></span></li>
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
                <div class="pricing_price">300</div>
              </div>
            </div>
            <div class="pricing_content">
              <ul>
              <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Guiding an optimal ecommerce platform.</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Improving stalled business workflows.</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Planning a cross-system landscape.</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Wireframing and prototyping.</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Usability testing.</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Forming a UI kit to reflect your brand.</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Bringing all functional requirements planned.</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Front-end and back-end development.</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Custom ecommerce development</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Ecommerce integration</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Headless and PWA development.</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>AR-powered experience.</strong></span></li>
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
              <div class="pricing_price_wrap"><span class="pricing_cur">$</span>
                <div class="pricing_price">400</div>
              </div>
            </div>
            <div class="pricing_content">
              <ul>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Including all previous services...</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Ecommerce testing</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>functionality for various user scenarios.</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Ecommerce solution integrations.</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>SEO-related aspects.</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Website performance.</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Security.</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Revising and updating security patches.</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Full checkup of IT infrastructure.</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Digital marketing automation</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Business performance optimization</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Expanding customer acquisition channels.</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Improving the checkout experience.</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Advancing data analytics capabilities.</strong></span></li>
                
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

export default Eccomerce