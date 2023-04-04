import FollowerCard from "./FollowerCard"

import { MyContext } from "../context/MyContext"
import React,{useContext} from 'react'

 






const Follower = () => {

  const myTest = useContext(MyContext)
  const { follower  } = myTest
const AllFollower = follower
  return (
    <div className=' flex flex-col  shadow-lg'>

    <h1 className='text-gray-500 w-fit p-1 px-2 bg-slate-100'>Followers</h1>
    <div  className="w-80 h-80 bg-slate-100 overflow-scroll">
{
  AllFollower.map((f)=>{
    return(
      <FollowerCard  {...f} key={f.id}/>

    )
     
    
  })
}

</div>

    </div>
  )
}
export default Follower