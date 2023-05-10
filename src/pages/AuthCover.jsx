import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import loadingGif from '../images/preloader.gif';

import LoadingSpin from '../components/mini/LoadingSpin';


function AuthCover({ children }) {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return (
      <>
     <LoadingSpin/>
      </>
    );
  }
  if (error) {
    console.log(error)
    return (
      <>
        <h1>{error.message}</h1>
      </>
    );
  }
  return <>{children}</>;
}


export default AuthCover;
