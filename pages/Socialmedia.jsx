import React from 'react'

import Link from 'next/link'


function Socialmedia() {
  return (
    <div className='web-body'>
    <div className="web-heading"><h2>Socialmedia-marketing</h2></div>
    <div className="web-maincontainer">

      <div className="web-container">
        <div className="web-intro">
          <div className="web-writing">
            <h2>Socialmedia-marketing</h2>
            <p>From strategy to content creation, we'll help you connect with your audience and grow your business. Our team of experts will work closely with you to develop a tailored strategy and create engaging content that will help you connect with your target audience and drive real results.</p>
           
            <ul className='frameworks'>
              
              <li>Strategy planning</li>
              <li>Account/profile creation and branding</li>
              <li>Content creation</li>
              <li>Content Publishing</li>
              <li>Campaign and community management</li>
              {/* <li></li> */}
            </ul>
          </div>
          <div className="web-logo">
          <img className='web-img' src='/images/web-development.webp'   alt='Image is Loading'
               width='400' height='400'
              />
          </div>
        </div>
        <div className="web-cards">
          <div className="web-singlecards-one">
            <div class="pricing_header">
              <h4 class="pricing_title" style={{ borderColor: "#ff7d00;" }}>Bronze</h4>
              <div class="pricing_price_wrap"><span class="pricing_cur">$</span>
                <div class="pricing_price">106</div><p>/  month</p>
              </div>
            </div>
            <div class="pricing_content">
              <ul>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Facebook Page Setup</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Content Creation (30 Captions)</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Business Page Content Writing</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Page Monitoring</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Social Engagement</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Comments/Replies</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Inquiry Forwarding</strong></span></li>
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
              <h4 class="pricing_title" style={{ borderColor: "#ff7d00;" }}>Silver</h4>
              <div class="pricing_price_wrap"><span class="pricing_cur">$</span>
                <div class="pricing_price">287</div><p>/ 6 month</p>
              </div>
            </div>
            <div class="pricing_content">
              <ul>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Facebook Page Setup</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Facebook Cover Design (2 Options)</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Content Creation (60 Captions)</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Complementery Privacy Policy</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Business Page Content Writing (About Us Section)</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Facebook Photo Album Creation</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Facebook Quiz / Polls</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Page Monitoring</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Social Engagement</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Audience Reach (Approx 85,000)</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Reporting (15 Days)</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Contract (6 Month)</strong></span></li>
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
                <div class="pricing_price">544</div><p>/ 6 month</p>
              </div>
            </div>
            <div class="pricing_content">
              <ul>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Facebook Page Setup</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Mobile Responsive</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Facebook Contest Setup</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Inquiry Forwarding</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Suggestion Report</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Info Graphics Creation (Weekly)</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Paid Ad Campaign (4 Campaign)</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Ad Campaign Spend ($200)</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Competitor Analysis</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Facebook Posting (Daily 3 times)</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Facebook Page Likes (Upto 5000)</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Audience Reach (Approx 185,000)</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Reporting (7 Days)</strong></span></li>
                <li><span style={{ color: "#000000", fontSize: "14px" }}><strong>Contract (6 Month)</strong></span></li>
                
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

export default Socialmedia