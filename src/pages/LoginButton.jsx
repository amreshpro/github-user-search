import React from "react";
import {FcGoogle} from 'react-icons/fc'
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect ,isLoading,isAuthenticated} = useAuth0();


  return <div className="flex flex-col m-1 justify-center items-center">
<div className="git p-1 px-2">
<img src="/github.png" alt="git-logo" className="rounded-full object-fill w-56"/>
</div>
  <button className="mt-3  flex px-2 py-1 text-2xl bg-primary-800 rounded-lg text-primary-200 text-center pr-4" onClick={loginWithRedirect}> <FcGoogle className="px-2 py-1 text-5xl"/>  <span className="mt-1">Log In </span></button>
  </div>
};

export default LoginButton;