
import Footer from './Footer'
import Navvbar from './Navvbar'

const Layout = ({children}) => {
  return (
    <>
    <Navvbar></Navvbar>
    {children}

    <Footer></Footer>
    </>
  )
}

export default Layout