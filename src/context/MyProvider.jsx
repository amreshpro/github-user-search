import {MyContext,baseURL} from './MyContext'
import React,{useState} from 'react'
import DefaultFollower from './defaultData/DefaultFollower'
import DefaultRepos from './defaultData/DefaultRepos'
import DefaultUser from './defaultData/DefaultUser'



const MyProvider = ({children}) => {

const [user, setUser] = useState(DefaultUser)
const [repos, setRepos] = useState(DefaultRepos)
const [follower, setFollower] = useState(DefaultFollower)


const searchGithubUser=async(currentUser)=>{
    //console.log(currentUser)
    const currentURL = `${baseURL}/${currentUser}`
    //console.log(`currenturl ==${currentURL}`)


   let userRes= await fetch(currentURL)
    .then((res)=>{
        //setUser(res.json())
     return res.json()
    })
    .catch((err)=>{console.log(err)})


  let userRepos = await fetch(`${currentURL}/repos`)
    .then((res2)=>{
        return res2.json()
   
    })
    .catch((err)=>{console.log(err)})





     let userFollower =  await fetch(`${currentURL}/followers`)
    .then((res3)=>{
        return res3.json()
     

    })
    .catch((err)=>{console.log(err)})



setUser(userRes)
setRepos(userRepos)
setFollower(userFollower)
// console.log(user)
// console.log(repos)
// console.log(follower)


}



  return (
  <MyContext.Provider
  value={{searchGithubUser,user,follower,repos}}
  >
    {children}
  </MyContext.Provider>
  )
}
export default MyProvider