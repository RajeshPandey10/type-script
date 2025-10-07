
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <div className="mt-2 mx-12">
      <Outlet/>
    </div>
    
    
    </>
  )
}

export default Layout