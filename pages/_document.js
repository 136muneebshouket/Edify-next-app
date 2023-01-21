import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      
      <Head >
       
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
   
   {/* <!-- Font Aewsome --> */}
  <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
    integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  {/* <!-- Bootstrap --> */}
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
   {/* <!-- AOS --> */}
  <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
  {/* <!-- Google Fonts --> */}
  
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
  <link
    href="https://fonts.googleapis.com/css2?family=Mandali&family=Montserrat:wght@100;200;300;400;500;600;700;800&family=Rubik:wght@300;400;500;600;700;800;900&display=swap"
    rel="stylesheet"
  />
    {/* <!-- Bootstrap Script  --> */}
   
    {/* <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></cript> */}
{/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></cript> */}

       </Head >
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
