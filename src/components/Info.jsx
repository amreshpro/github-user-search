import React,{useContext} from 'react'

import InfoCard from "./InfoCard"

import {ImUserPlus,ImUsers} from 'react-icons/im'
import {SiBookstack, SiCoveralls} from 'react-icons/si'
import DefaultRepos from "../context/defaultData/DefaultRepos"


import DefaultUser from "../context/defaultData/DefaultUser"
import { MyContext } from "../context/MyContext"



const Info = () => {
const MyTest = useContext(MyContext);
const { user} = MyTest
const {public_repos,followers,following} = user
// console.log(repos,followers,following)
// console.log(repos.length)
// console.log(typeof repos, typeof followers)
  return (
    <div className="flex flex-wrap gap-5 justify-center">

<InfoCard icon={<SiBookstack className='text-4xl text-white '/>} title="Repos" count={public_repos} bg="bg-red-300"/>
<InfoCard icon={<ImUsers className='text-4xl text-white '/>}  title="Follower" count={followers} bg="bg-blue-300" />

<InfoCard  icon={<ImUserPlus className='text-4xl text-white '/>} title="Following" count={following} bg="bg-purple-300" />

{/* <InfoCard title="Gist" count={0} bg="bg-pink-300" icon={<SiCoveralls className='text-4xl text-white '/>}  /> */}


    </div>
  )
}
export default Info