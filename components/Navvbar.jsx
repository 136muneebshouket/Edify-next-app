
import React, { useReducer, useState } from 'react'
// import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import img from '/logo.png'
// import { NavLink } from 'react-router-dom';
import Link from 'next/link';
import Image from 'next/image';
// import { Outlet, Link } from "react-router-dom";


function Navvbar() {
  return (
    <>
      <div className="firstnav">
        <div className="navlogo">
          <Image src='/logo.png' width={100} height={100} alt="" />
        </div>
        <div className="nav-contacts">
          <ul>
            <li>
              <div class="icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div class="info">
                California, TX 70240 </div>
            </li>
            <li>
              <div class="icon">
                <i class="fas fa-envelope-open"></i>
              </div>
              <div class="info">
                Info@gmail.com </div>
            </li>
            <li>
              <div class="icon">
                <i class="fas fa-phone"></i>
              </div>
              <div class="info">
                +123 456 7890 </div>
            </li>
          </ul>
        </div>
      </div>

      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky='top' className='navbar' >
        <Container >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">



            < Nav>
          
              {/* <Nav.Link > */}
              <Link href='/' className='nav-link'> Home </Link>
                {/* </Nav.Link> */}



              <NavDropdown className='dropdownbtn' title="Services" id="collasible-nav-dropdown">
                


                <NavDropdown.Item className='show-links' > <Link href='/Webdev'> Web Development</Link></NavDropdown.Item>
                <NavDropdown.Item className='show-links'><Link href="/Appdev">
                  Mobile Development</Link>
                </NavDropdown.Item>
                <NavDropdown.Item className='show-links'> <Link href="/Enterprise">Enterprise solutions</Link></NavDropdown.Item>

                <NavDropdown.Item className='show-links'><Link href="/Graphic">
                  Graphics Desigining</Link>
                </NavDropdown.Item>
                <NavDropdown.Item className='show-links'><Link href="/Digital">
                  Digital Marketing</Link>
                </NavDropdown.Item>
                <NavDropdown.Item className='show-links'><Link href="/UI">
                  UI/UX</Link>
                </NavDropdown.Item>
                <NavDropdown.Item className='show-links'><Link href="/SEO">
                  SEO</Link>
                </NavDropdown.Item>
                <NavDropdown.Item className='show-links'><Link href="/Socialmedia">
                  Social media marketing</Link>
                </NavDropdown.Item>
                <NavDropdown.Item className='show-links'><Link href="/Eccomerce">
                  Eccomerce</Link>
                </NavDropdown.Item>
              
              </NavDropdown>
               





              <Link href='/Portfolio'  className='nav-link'> Portfolio</Link>
              <Link href='/About'  className='nav-link'>  About Us</Link>
              <Link href='/Contact'  className='nav-link'> Contact Us</Link>

            </Nav>

          </Navbar.Collapse>
          <Navbar.Brand href="#home">
            <div className="low-navlogo">
              <Image src='/logo.png' width="100" height="100" alt="" />
            </div>
          </Navbar.Brand>

          <div class="searchBox">

            <input class="searchInput" type="text" name="" placeholder="Search" />
            <button class="searchButton" href="#">
              <i class="material-icons">
                search
              </i>
            </button>
          </div>


        </Container>

      </Navbar>

{/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">dropdown link</a>
          <a class="dropdown-item" href="#">dropdown link</a>
          <a class="dropdown-item" href="#">dropdown link</a>
        </div>
      </li>
    </ul>
  </div>
</nav> */}


    </>
  )
}

export default Navvbar