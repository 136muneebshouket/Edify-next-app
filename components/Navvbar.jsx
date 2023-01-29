
import React, { useReducer, useState, useRef } from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
// import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Link from 'next/link';



function Navvbar() {
  const [toggleNavBar, setToggleNavBar] = useState(false)
  const [toggleul, setToggleul] = useState(false)
  var dropDownRef = useRef()
  var dropDownRef2 = useRef()
  var dropDownRef3 = useRef()




  return (
    <>
      <div className="firstnav">
        <div className="navlogo">
          <img src='/images/logo.webp' width={100} height={100} alt='Image is Loading' />
        </div>
        <div className="nav-contacts">
          <ul>
            <li>
              <div class="icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div class="info">
               marylan, 21043</div>
            </li>
            <li>
              <div class="icon">
                <i class="fas fa-envelope-open"></i>
              </div>
              <div class="info">
              info@kryptoservs.com</div>
            </li>
            <li>
              <div class="icon">
                <i class="fas fa-phone"></i>
              </div>
              <div class="info">
                +1 443-741-1187 </div>
            </li>
          </ul>
        </div>
      </div>

 

      <div className="NavBar">
        <nav>

          <div className="navLinks">
            <ul style={{ top: toggleNavBar ? "100%" : "-1000%" }} >
              <li>
                <Link href='/'>Home</Link>

              </li>
              <li className='services_one'>
                <Link href="">services
                <i  className="fa-solid fa-angle-down"></i>
                </Link>
                <ul className='dropDownList'>
                  <li><Link style={{ color: 'black', marginBottom: '4px', fontWeight:'500' }} href='/Webdev' className='drop-downitem' >Web Development</Link></li>
                  <li><Link style={{ color: 'black', marginBottom: '4px', fontWeight:'500' }} href='/Appdev' className='drop-downitem' >App Development</Link></li>
                  <li><Link style={{ color: 'black', marginBottom: '4px', fontWeight:'500' }} href='/Digital' className='drop-downitem' >Digital Marketing</Link></li>
                  <li><Link style={{ color: 'black', marginBottom: '4px', fontWeight:'500' }} href='/Graphic' className='drop-downitem'  >Graphic Designing</Link></li>
                  <li><Link style={{ color: 'black', marginBottom: '4px', fontWeight:'500' }} href='/SEO' className='drop-downitem' >Search Engine Optmization</Link></li>
                  <li><Link style={{ color: 'black', marginBottom: '4px', fontWeight:'500' }} href='/UI' className='drop-downitem' >UI/UX</Link></li>
                  <li><Link style={{ color: 'black', marginBottom: '4px', fontWeight:'500' }} href='/Socialmedia' className='drop-downitem' >Social media</Link></li>
                  <li><Link style={{ color: 'black', marginBottom: '4px', fontWeight:'500' }} href='/Eccomerce' className='drop-downitem' >Ecommerce</Link></li>
                  <li><Link style={{ color: 'black', marginBottom: '4px', fontWeight:'500' }} href='/Enterprise' className='drop-downitem' >Enterprise </Link></li>

                </ul>
              </li>
              <li className='services_two'>
                <Link ref={dropDownRef} onClick={() => setToggleul(!toggleul)} href="">What we Help
                <i ref={dropDownRef2} className="fa-solid fa-angle-down"></i>
                </Link>
                <ul style={{ display: toggleul ? 'block' : 'none', overflowY: 'scroll', height: '185px', border: '1px solid',width:'100%',borderRadius:'4px' }} ref={dropDownRef3} className='dropDownList'>
                  <li style={{ margin: '15px 0px' }}><Link href="/Appdev">App Development</Link></li>
                  <li style={{ margin: '15px 0px' }}><Link href="/Webdev">Web Development</Link></li>
                  <li style={{ margin: '15px 0px' }}><Link href="/Digital">Digital Marketing</Link></li>
                  <li style={{ margin: '15px 0px' }}><Link href="/Graphic">Graphic Designing</Link></li>
                  <li style={{ margin: '15px 0px' }}><Link href="/SEO">Search Engine Optmization</Link></li>
                  <li style={{ margin: '15px 0px' }}><Link href="/UI">UI/UX</Link></li>
                  <li style={{ margin: '15px 0px' }}><Link href="/Socialmedia">Social media</Link></li>
                  <li style={{ margin: '15px 0px' }}><Link href="/Eccomerce">Ecommerce</Link></li>
                  <li style={{ margin: '15px 0px' }}><Link href="/Enterprise">Enterprise</Link></li>
                </ul>
              </li>
              <li>
              <Link href='/Portfolio'>Portfolio</Link>

              </li>
              <li>
               <Link href="/About">About_Us</Link>

              </li>
              <li>
               <Link href="/Contact" >Contact</Link>

              </li>


            </ul>
            <OutsideClickHandler
              onOutsideClick={(event) => {
                if ((dropDownRef.current != event.target) && (dropDownRef2.current != event.target) && (dropDownRef3.current != event.target)) {
                  setToggleNavBar(false)
                }
              }}
            >
              <i onClick={() => setToggleNavBar(!toggleNavBar)} className='fa-solid fa-bars'></i>
            </OutsideClickHandler>
          </div>
          <div class="searchBox">

            <input className="searchInput" type="text" name="search" placeholder="Search" />
            <button className="searchButton" name='search'>
              <i className="material-icons">
                search
              </i>
            </button>
          </div>
        </nav>
      </div>




    </>
  )
}

export default Navvbar