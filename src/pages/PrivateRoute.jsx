import { useAuth0 } from "@auth0/auth0-react"
import { Navigate } from "react-router-dom";



const PrivateRoute = ({children}) => {
    const {isAuthenticated} = useAuth0();
    console.log(isAuthenticated)
   
if(!isAuthenticated){
    return <Navigate to="/login" />
}

   return children
  
}
export default PrivateRoute