import Error from "../pages/Error"
import FollowerContainer from "./FollowerContainer"
import SearchBox from "./SearchBox"
import UserCard from "./UserCard"
import { useAuth0 } from "@auth0/auth0-react"
import Navbar from '../pages/Navbar'
import { Navigate } from "react-router-dom"



const Dashboard = () => {
   
  return (
    <div>



<Navbar/>
<SearchBox/>
<UserCard/>
<FollowerContainer/>



    </div>
  )
}
export default Dashboard