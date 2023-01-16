import React from 'react'
import Link from "next/link";
// import Image from 'next/image';
// import './Footer.css'

function Footer() {
  return (<>
   <footer>
   <div className="content container">
     <div className="left-boxx mx-5">
     
       <div className="topic">Company</div>
       <div><Link href="#"> About Us</Link></div>
       <div><Link href="#">Meet Our Team</Link></div>
       <div><Link href="#">Help & FAQs</Link></div>
       <div><Link href="#">Our Services</Link></div>
       <div><Link href="#">Why Choose Us</Link></div>
     
     
       <div className="lower">
         <div className="topic">Contact us</div>
         <div className="phone">
           <Link href="#"><i className="fas fa-phone-volume"></i>+007 9089 6767</Link>
         </div>
         <div className="email">
           <Link href="#"><i className="fas fa-envelope"></i>abc@gmail.com</Link>
         </div>
       </div>
     </div>
     <div className="middle boxx ">
       <div className="topic">Our Services</div>
       <div><Link href="#">Web Design, Development</Link></div>
       <div><Link href="#">Web UX Design, Reasearch</Link></div>
       <div><Link href="#">Web User Interface Design</Link></div>
       <div><Link href="#">Theme Development, Design</Link></div>
       <div><Link href="#">Mobile Application Design</Link></div>
       <div><Link href="#">Wire raming & Prototyping</Link></div>
     </div>
     <div className="right boxx">
       <div className="topic">Subscribe us</div>
       <div className="footer-logo">
      <img  src="/footerlogo-light.png" width='180' height='70'
       />
       </div>
       <form action="#">
         <input type="text" placeholder="Enter email address"/>
         <input type="submit" name="" value="Send"/>
         <div className="media-icons">
           <Link href="#"><i className="fab fa-facebook-f"></i></Link>
           <Link href="#"><i className="fab fa-instagram"></i></Link>
           <Link href="#"><i className="fab fa-twitter"></i></Link>
           <Link href="#"><i className="fab fa-youtube"></i></Link>
           <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
         </div>
       </form>
     </div>
   </div>
   <div className="bottom">
     <p>Copyright © 2020 <Link href="#">Edify</Link> All rights reserved</p>
   </div>
 </footer>

  </>
    
  )
}

export default Footer