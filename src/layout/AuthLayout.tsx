import { Navigate, Outlet } from "react-router-dom"


const AuthLayout = ({user}:{user:boolean}) => {
  return (
    <>
    {
        user? <Outlet/> : <Navigate to="/"/>
    }
    </>
  )
}

export default AuthLayout