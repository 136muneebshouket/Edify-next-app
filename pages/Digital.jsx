import React from 'react'

import Link from 'next/link'



function Digital() {
  return (
    <div className='web-body'>
    <div className="web-heading"><h2>Digital-Marketing</h2></div>
    <div className="web-maincontainer">

      <div className="web-container">
        <div className="web-intro">
          <div className="web-writing">
            <h2>Digital-Marketing</h2>
            <p>From strategy to content creation, we'll help you connect with your audience and grow your business. Our team of experts will work closely with you to develop a tailored strategy and create engaging content that will help you connect with your target audience and drive real results.</p>
           
            <ul className='frameworks'>
              
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
                <div class="pricing_price">100</div>
              </div>
            </div>
            <div class="pricing_content">
              <ul>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Landing Page Recommendation</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Text Ads</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Conversion Tracking</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Campaign Management</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Landing Page Optimization</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Reporting (Monthly)</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Google Analytics Report (Monthly)</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Project Management Tool Tracking</strong></span></li>
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
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Initial Estimate Report</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Landing Page Recommendation</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Unlimited Keywords</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Text Ads</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Conversion Tracking</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Google Analytics Set-up</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Campaign Management</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Mobile Ads</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Reporting (Weekly)</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Google Analytics Report (Monthly)</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Gmail Ads (GSP)</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Project Management Tool Tracking</strong></span></li>
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
                <div class="pricing_price">300</div>
              </div>
            </div>
            <div class="pricing_content">
              <ul>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Initial Estimate Report</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Landing Page Recommendation</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Unlimited Keywords</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Text Ads</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Conversion Tracking</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>A/B Testing</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Google Analytics Set-up</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Campaign Management</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Mobile Ads</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Gmail Ads (GSP)</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Landing Page Optimization</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Reporting (Daily)</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Project Management Tool Tracking</strong></span></li>
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

export default Digital