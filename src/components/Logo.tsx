import logo from "../assets/images/logo.jpg"
const Logo = () => {
  return (
    <>
   <a href="/">
     <img src={logo} alt="logo" width={40} height={40} className="rounded-full"/>
   </a>
    </>
  )
}

export default Logo