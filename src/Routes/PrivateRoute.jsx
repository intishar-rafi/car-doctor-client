import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"
import { Navigate, useLocation } from "react-router-dom"


const PrivateRoute = ({children}) => {

  const {user,loading} = useContext(AuthContext)

  const location= useLocation()

  if (loading){
    return <span className="loading loading-spinner text-error"></span>
  }

  if (user?.email){
    return children
  }
  return <Navigate state={location.pathname} to="/enterin" replace></Navigate>
}

export default PrivateRoute