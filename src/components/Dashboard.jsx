
import FollowerContainer from "./FollowerContainer";
import SearchBox from "./SearchBox";
import UserCard from "./UserCard";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "../pages/Navbar";

import LoadingSpin from "./mini/LoadingSpin";
import Title from "./mini/Title";

import InfoContainer from "./InfoContainer";
import FollowingContainer from "./FollowingContainer";

const Dashboard = () => {
  const {isAuthenticated,isLoading} = useAuth0()

if(isLoading){
  return<> <LoadingSpin/> </>
}
if(isAuthenticated)
  return (
    <div className="flex flex-col gap-5 mb-8">
     <div className="top flex flex-col gap-3">
      <Title/>
     <Navbar />
      <SearchBox />
      </div>

    <div className="data flex flex-col justify-center items-center">
      <UserCard />
    <InfoContainer/> 
      </div>

  <div className="follow-container flex flex-wrap justify-center gap-3">
  <FollowerContainer />
      <FollowingContainer/>
  </div>
 
    </div>
  );
};
export default Dashboard;
