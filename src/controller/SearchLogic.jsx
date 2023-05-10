import React, { useState,useEffect } from "react";
import SearchContext from "./context/SearchContext";
import follower from "./defaults/follower";
import user from "./defaults/user";
import { useAuth0 } from "@auth0/auth0-react";



const baseUrl = "https://api.github.com/users";

const SearchLogic = ({ children }) => {

  const [gitUser, setGitUser] = useState(user);
  const [gitFollower, setGitFollower] = useState(follower);
  const [isLoading, setIsLoading] = useState(false)
  const [isFound, setIsFound] = useState(true)

  const SearchGithubUser = async (userName) => {
    setIsLoading(true)
    // fetch user
    const gitUserFetchedData = await fetch(`${baseUrl}/${userName}`)
      .then((res) => {
   
        if(res.status == 404){
          setIsFound(false)
          return null
        }
        setIsFound(true)
        return res.json();
      })
      .catch((err) => {
        setIsFound(false)
        console.log(err);
      });



    setGitUser(gitUserFetchedData);

    // fetched follower
    const gitFollowerFetchedData = await fetch(
      `${baseUrl}/${userName}/followers`
    )
      .then((res) => {
        if(res.status == 404){
          setIsFound(false)
          return null
        }
        setIsFound(true)
        return res.json();
      })
      .catch((err) => {
        setIsFound(false)
        console.log(err);
      });

      // if(gitFollowerFetchedData.message ==='Not Found'){ 
      //   setIsFound(false)
      //   setIsLoading(false)
      // }
    setGitFollower(gitFollowerFetchedData);

    setIsLoading(false)
  };



useEffect(()=>{
  
  SearchGithubUser('amreshpro')

},[])

  return (
    <SearchContext.Provider value={{ SearchGithubUser, gitUser, gitFollower, isLoading,isFound }}>
      {children}
    </SearchContext.Provider>
  );
};
export default SearchLogic;
