
import { Navigate, Outlet } from 'react-router-dom'

const UnAuthLayout=({user}:{user:boolean}) => {
  return (
    <>
    {
        user? <Navigate to="/login"/> :<Outlet/> 
    }
    </>
  )
}

export default UnAuthLayout