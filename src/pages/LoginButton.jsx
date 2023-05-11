import React from "react";
import {FcGoogle} from 'react-icons/fc'
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect ,isLoading,isAuthenticated} = useAuth0();


  return <div className="flex flex-col justify-center items-center">
<div className="git">
<img src="/github.png" alt="git-logo" className="rounded-full"/>
</div>
  <button className=" flex px-2 py-1 text-3xl bg-primary-800 rounded-lg text-primary-200 text-center" onClick={loginWithRedirect}> <FcGoogle className="px-2 py-1 text-5xl"/>  <strong className="mt-1">Log In </strong></button>;
  </div>
};

export default LoginButton;