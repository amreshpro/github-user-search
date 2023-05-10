import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect ,isLoading,isAuthenticated} = useAuth0();


  return <button className="px-2 py-1 bg-primary-800 rounded-lg text-primary-200" onClick={loginWithRedirect}>Log In</button>;
};

export default LoginButton;