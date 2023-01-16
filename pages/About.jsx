// import "./About.css";
// import EachPageBanner from "../../EachPageBanner/EachPageBanner";
// import {Link} from 'react-router-dom'
// import img from './Screenshot.png'
import Link from "next/link";
// import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="about-main">
      {/* <EachPageBanner Heading="About Us" bgImg="aboutBanner" /> */}
      <div className="about-section">
        <h1>About Us </h1>
        {/* <p>Some text about who we are and what we do.</p>
        <p>Resize the browser window to see that this page is responsive by the way.</p> */}
      </div>

      <div className="About">
        <div className="actualAbout padMain">
          <div className="innerpadmain">
            <div className="row">
              {/* <div
                data-aos="zoom-in-up"
                className="col-xl-6 col-md-6 col-lg-6 col-sm-12 aboutLeftContentSection"
              >
             
                <h2 className="flwh">
                  Our Mission is to Provide a World‑className Education.
                </h2>
                <p className="flwp text-justify">
                  Edify College of IT provides professional development & short
                  courses that cover a wide range of topics related to technology.
                  Our courses are designed to provide students with the skills and
                  knowledge they need to stay ahead of the curve in today's
                  ever-changing technological landscape. Whether you're looking to
                  improve your skills for your current job or you're interested in
                  exploring a new career path, Edify College of IT has a course
                  for you.
                </p>
              </div> */}

              {/* <div
                data-aos="zoom-in-up"
                className="col-xl-6 col-md-6 col-lg-6 col-sm-12 videoSection"
              >
                <div className="innerVideoSection">
                  <div className="overlay">
                    <button
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                      className="videoPlayBtn"
                    >
                      <i className="fa-solid fa-play"></i>
                    </button>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="row">
              <div className="col-12">
                <div className="flwp text-justify mt-1">
                  At {" "}
                  <strong style={{ color: "var(--blueClr)" }}>
                    {/* <Link  to="/">
                  Edify College of IT
                  </Link> */}
                  </strong>
                  , we offer various training programs that introduce students to
                  the world of information technology so they can better
                  understand which job role within the sector suits them best. Our
                  college is located in Faisalabad Pakistan and provides some of
                  the best facilities for aspiring IT professionals. The
                  <strong> Edify</strong> college of IT offers a variety of IT
                  courses that are designed to give students the skills and
                  knowledge they need to succeed in today's competitive market.
                  The courses are taught by experienced industry professionals who
                  have a wealth of experience to share with <strong>Edify</strong>{" "}
                  students. The college's focus on giving its students the best
                  possible education has made it a top choice for those seeking a
                  career in IT. With its excellent facilities and highly qualified
                  staff, <strong>Edify</strong> College of IT is the perfect place
                  to get the magnificent skills for student's future.{" "}
                  <strong>Edify</strong> College of IT's dedication to its
                  students does not stop after they graduate. The college has an
                  active career services department that helps graduates find jobs
                  in their chosen fields. <strong>Edify </strong>
                  College of IT is also a Platinum member of the British Council,
                  which gives its graduates access to job postings and internships
                  from around the country. The <strong>Edify</strong> college of
                  IT offers several different benefits to its students. These
                  benefits include:
                  <br />
                  <br />
                  <ul style={{ listStylePosition: "inside" }}>
                    <li>A variety of IT courses to choose from</li>
                    <li>Taught by experienced industry professionals</li>
                    <li>Excellent facilities and qualified staff</li>
                    <li>
                      Career services department to help graduates find jobs
                    </li>
                    <li>A platinum member of the British Council</li>
                  </ul>
                  If you are looking for the best IT education Center that
                  Faisalabad has to offer, look no further than{" "}
                  <strong>Edify</strong> College of IT. With its commitment to its
                  students and dedication to providing them with the best possible
                  education, <strong>Edify</strong> College of IT is the perfect
                  choice for those seeking a career in IT.
                </div>
              </div>
            </div>
          </div>
          <div className="team">
            <div className="row">
              <div className="column">
                <div className="card">
                  <div className="author-info">
                  <img src='/ceoimg.png' width='100' height='300' alt="Jane"
                    // style={{ borderRadius: '20px',width:'200px',height:'200px',margin:'20px' }}
                  />
                  <div className="author-links">
                   <Link className='links'  href=""><i  className="fa-brands fa-facebook"></i> </Link>
                   <Link  className='links'  href=""><i className="fa-brands fa-twitter"></i></Link>
                   <Link  className='thirdlinks'  href=""><i className="fab fa-instagram"></i> </Link>
                   <Link  className='thirdlinks'  href=""><i class="fab fa-youtube"></i> </Link>
                  </div>
                  </div>
                  <div style={{margin:'20px'}} className="container">
                    <h2>Azeem Qasim</h2>
                    <p className="title">CEO &amp; Founder</p>
                    <p>“Edify group of companies is one of the leading consultancies in Pakistan because it is actively designing solutions for the world’s most ambitious change-makers who will define the future.”</p>
                    
                   
                    <a href="info@edify.pk">info@edify.pk</a>

                  </div>
                </div>
              </div>




            </div>
          </div>
        </div>


        {/* <div className="Footer">
          <div className="actualfooter py-4 padmain">
            <div className="row mainfooter">

            </div>

          </div>
        </div> */}

        {/*====================== VideoModel=========================== */}
        {/* <div
          className="modal fade"
          id="exampleModalCenter"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-body">
                <iframe
                  width="100%"
                  height="500px"
                  src="https://www.youtube.com/embed/dPm7vve6Q-0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      </div>
    
    </>
  );
};

export default About;
