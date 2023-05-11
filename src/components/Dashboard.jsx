
import FollowerContainer from "./FollowerContainer";
import SearchBox from "./SearchBox";
import UserCard from "./UserCard";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "../pages/Navbar";

import LoadingSpin from "./mini/LoadingSpin";
import InfoContainer from "./InfoContainer";

const Dashboard = () => {
  const {isAuthenticated,isLoading} = useAuth0()

if(isLoading){
  return<> <LoadingSpin/> </>
}
if(isAuthenticated)
  return (
    <div>
     <div className="top"></div>
     <Navbar />
      <SearchBox />
    <div className="data">
      <UserCard />
    <InfoContainer/>
      <FollowerContainer />
    </div>
    </div>
  );
};
export default Dashboard;
