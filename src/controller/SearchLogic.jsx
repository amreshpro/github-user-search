import React,{useState} from 'react'
import SearchContext from "./context/SearchContext"
import follower from "./defaults/follower"
import user from "./defaults/user"
import { useAuth0 } from '@auth0/auth0-react'

const baseUrl = 'https://api.github.com/users'

const SearchLogic = ({children}) => {

const [gitUser, setGitUser] = useState(user)
const [gitFollower, setGitFollower] = useState(follower)
//const [isLoading, setIsLading] = useState(false)

const {isAuthenticated,isLoading}  = useAuth0();


const SearchGithubUser = async (userName)=>{

  // fetch user
const gitUserFetchedData = await  fetch(`${baseUrl}/${userName}`,
{
  method: "GET",
  mode: "cors",
  headers: {
    
      "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
}
).then((res)=>{
  return res.json()
}).catch((err)=>{
  console.log(err)
})

setGitUser(gitUserFetchedData)


// fetched follower
const gitFollowerFetchedData = await  fetch(`${baseUrl}/${userName}/followers`,{
  method: "GET",
  mode: "cors",
  headers: {
    
      "Content-Type": "application/json",
  },
  body: JSON.stringify(data),}
).then((res)=>{
  return res.json()
}).catch((err)=>{
  console.log(err)
})


setGitFollower(gitFollowerFetchedData)

}


  return (
    <SearchContext.Provider value={{SearchGithubUser,gitUser,gitFollower}}>

      {children}
    </SearchContext.Provider>
  )
}
export default SearchLogic