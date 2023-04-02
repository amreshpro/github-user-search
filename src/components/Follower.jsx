import FollowerCard from "./FollowerCard"
import DefaultFollower from '../context/defaultData/DefaultFollower'

 const follow = DefaultFollower
const Follower = () => {
  return (
    <div className=' flex flex-col  shadow-lg'>

    <h1 className='text-gray-500 w-fit p-1 px-2 bg-slate-100'>Followers</h1>
    <div  className="w-80 h-80 bg-slate-100 overflow-scroll">
{
  follow.map((f)=>{
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