import React from 'react'

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
            <img className='web-img' src='/images/Branding.webp' alt='Image is Loading'
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
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>3 Initial Concepts Included</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Source File</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Logo Transparency</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>High Resolution</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>3D Mockup</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Social Media Kit</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Vector File</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>5 Size Variation</strong></span></li>
                </ul>
              </div>
              <div className="buynow-btn">
              <div class="card-btn"><Link href='/Contact'>Buy Now</Link>
               </div>
               </div>
            </div>
            <div className="web-singlecards-two" style={{ maxHeight:'972px' }}>
              <div class="pricing_header">
                <h4 class="pricing_title" style={{ borderColor: "#ff7d00;" }}>Bronze</h4>
                <div class="pricing_price_wrap"><span class="pricing_cur">$</span>
                  <div class="pricing_price">499</div>
                </div>
              </div>
              <div class="pricing_content">
                <ul>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Print-Ready</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Source File</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Double-Sided</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Commercial Use</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Create a 8 pages brochure<br/> specific to your needs .</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Basic Package: 3 mobile<br/> screens or 1 web page</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Create a Biofold / Trifold <br/>brochure specific to your needs .</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>2 Page/Screen</strong></span></li>
               
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>FRONT & BACK LAYOUT</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>ARTWORK & DESIGN</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>1X COLOR SKETCH</strong></span></li>
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
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Including first two Offers</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>1X COLOR SKETCH</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>FRONT & BACK LAYOUT</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>ACCESSORIES & PATCH</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>SPECS SHEET</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>ACCESSORIES & PATCH</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>MAIN LABEL & CARE LABELS</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>HANG TAG</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>1 Photo per product</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>1 Product</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Lifestyle Staging</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Product Prep</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Model/Live Subject</strong></span></li>
                  <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Enhanced Detailing</strong></span></li>
                  
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