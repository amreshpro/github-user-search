import InfoCard from "./InfoCard"

import {ImUserPlus,ImUsers} from 'react-icons/im'
import {SiBookstack, SiCoveralls} from 'react-icons/si'
import DefaultRepos from "../context/defaultData/DefaultRepos"


import DefaultUser from "../context/defaultData/DefaultUser"

const {followers,following } = DefaultUser
const repos = DefaultRepos.length

const Info = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-center">

<InfoCard icon={<SiBookstack className='text-4xl text-white '/>} title="Repos" count={repos} bg="bg-red-300"/>
<InfoCard icon={<ImUsers className='text-4xl text-white '/>}  title="Follower" count={followers} bg="bg-blue-300" />

<InfoCard  icon={<ImUserPlus className='text-4xl text-white '/>} title="Following" count={3} bg="bg-purple-300" />

<InfoCard title="Gist" count={following} bg="bg-pink-300" icon={<SiCoveralls className='text-4xl text-white '/>}  />


    </div>
  )
}
export default Info