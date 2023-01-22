import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="about-main">
      
      <div className="about-section">
        <h1>About Us </h1>
        
      </div>

      <div className="About">
        <div className="actualAbout padMain">
          <div className="innerpadmain">
            <div className="row">

            </div>
            <div className="row">
              <div className="col-12">
                <div className="flwp text-justify mt-1">
  
                  We offer various training programs that introduce students to
                  the world of information technology so they can better
                  understand which job role within the sector suits them best. Our
                  college is located in Faisalabad Pakistan and provides some of
                  the best facilities for aspiring IT professionals. The
                  <strong> kryptoservs</strong> college of IT offers a variety of IT
                  courses that are designed to give students the skills and
                  knowledge they need to succeed in today's competitive market.
                  The courses are taught by experienced industry professionals who
                  have a wealth of experience to share with <strong>kryptoservs</strong>{" "}
                  students. The college's focus on giving its students the best
                  possible education has made it a top choice for those seeking a
                  career in IT. With its excellent facilities and highly qualified
                  staff, <strong>kryptoservs</strong> College of IT is the perfect place
                  to get the magnificent skills for student's future.{" "}
                  <strong>kryptoservs</strong> College of IT's dedication to its
                  students does not stop after they graduate. The college has an
                  active career services department that helps graduates find jobs
                  in their chosen fields. <strong>kryptoservs </strong>
                  College of IT is also a Platinum member of the British Council,
                  which gives its graduates access to job postings and internships
                  from around the country. The <strong>kryptoservs</strong> college of
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
                  <strong>kryptoservs</strong> College of IT. With its commitment to its
                  students and dedication to providing them with the best possible
                  education, <strong>kryptoservs</strong> College of IT is the perfect
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
                  <img src='/images/ceoimg.webp' width='100' height='300' alt='Image is Loading'
                    
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
                    <p>“kryptoservs group of companies is one of the leading consultancies in Pakistan because it is actively designing solutions for the world’s most ambitious change-makers who will define the future.”</p>
                    
                   
                    <a href="kryptoservs@gmail.com">kryptoservs@gmail.com</a>

                  </div>
                </div>
              </div>




            </div>
          </div>
        </div>


       
      </div>
      </div>
    
    </>
  );
};

export default About;
