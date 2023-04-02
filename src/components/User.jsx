import DefaultUser from '../context/defaultData/DefaultUser'
import React,{useState} from 'react'
// react-icons import
import {FaLayerGroup} from 'react-icons/fa'
import {ImLocation2} from 'react-icons/im'
import {AiOutlineLink} from 'react-icons/ai'



const {login,avatar_url,html_url ,location,blog,bio,name,twitter_username} = DefaultUser




const User = () => {

    const {userData, setUserData} = useState(DefaultUser)



    const [twitterName, setTwitterName] = React.useState("John Wick")
    // if(twitter_username) {setTwitterName(twitter_username)}


  return (
    <div className=' flex flex-col w-80 h-full flex-wrap shadow-lg'>

<h1 className='text-gray-500 w-fit p-1 px-2 bg-slate-100'>User</h1>
    
 
    <div className=' bg-slate-100 p-3 w-96'>

<div className="top flex  gap-3 flex-wrap justify-start items-center  mymedia">
    <div className="img w-24 bg-blue-400 h-24 rounded-full flex justify-center items-center">
<img src={avatar_url} className='w-24 h-24 rounded-full' alt="" />

    </div>
    <div className="text-info flex flex-wrap gap-5">
<div className="text">
    <h1 className="md:text-2xl text-lg">{name}</h1>
<h3 className="text-gray-500">@{!twitter_username ?'John Wick' : twitter_username}</h3>
</div>

<a className="btn-follow h-fit text-white bg-blue-400 px-2 p-1 rounded-lg m-1 hover:bg-pink-200" href={html_url}>Follow</a>

    </div>
</div>
<div className="bottom">
    <div className="des flex flex-wrap text-gray-600 mt-2 overflow-hidden">
      {bio}
    </div>

<div className="bottom-info mt-4">
    <div className="company flex gap-1 m-1">
        <FaLayerGroup className='text-gray-400 mt-1 '/> <h1 className='text-gray-500'>Amresh Studio</h1>
    </div>
    <div className="location flex gap-1 m-1">
        <ImLocation2 className='text-gray-400 mt-1'/>
        <h1 className='text-gray-500'>{location}</h1>
    </div>
    <div className="portfolio flex gap-1 m-1">
        <AiOutlineLink className='text-gray-400 mt-1'/> 
        <a href={blog} className='underline text-blue-400 '>{blog}</a>
    </div>
</div>

</div>

    </div>

    </div>
  )
}
export default User