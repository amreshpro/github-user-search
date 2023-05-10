import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
const isUserExist = isAuthenticated && user
  if (isLoading) {
    return <div>Loading ...</div>;
  }
if(isUserExist){
    return (
      <>
         <h1 className="titile text-center m-2 p-1 font-bold text-xl text-primary-800"> Welcome {user?.name}</h1>
      <div className="flex justify-center items-center gap-2">
     
    <div className="img">
      <img src={user?.picture} alt={user?.name} className="rounded-full w-14 " />
    </div>
<div className="font-poppins">
  <h1 className="font-poppins text-primary-600">{user?.email}</h1>
</div>

        </div>
      </>
    );
}
};

export default Profile;