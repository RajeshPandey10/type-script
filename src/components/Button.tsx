import { Link } from "react-router-dom"


const Button = ({action}:any) => {
  return (
    <button className="cursor-pointer text-black bg-blue-200 p-2 items-center rounded-md text-xs">
    
       <Link to={(action==="sign-in")?"/sign-in":"/sign-up"}>
       {action}
       </Link>
    
    </button>
  )
}

export default Button