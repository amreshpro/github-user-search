import React,{useState,useEffect, createContext} from 'react'
// default Data
import DefaultFollower from './defaultData/DefaultFollower'
import DefaultRepos from './defaultData/DefaultRepos'
import DefaultUser from './defaultData/DefaultUser'

// axois for fetching data
import axios from 'axios'


const baseURL  = "https://api.github.com/users"

export const ourContextData = createContext();



export const ourContainerFunction  = ()=>{
  const [seachUser, setSeachUser] = useState(DefaultUser)
const searchGithubUsers = async(user)=>{
    const response = await axios(`${baseURL}/${user}`).catch((err)=>{console.log(err)})
    if(response){
        setSeachUser(response.data)
    }
}


return(
    <div className="">
        <ourContextData.Consumer
        value={{searchGithubUsers,seachUser}}
        >

        </ourContextData.Consumer>
    </div>
)


 }