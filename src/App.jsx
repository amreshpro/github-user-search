import {SearchBox,UserCard} from "./components"
import FollowerContainer from "./components/FollowerContainer"
import Title from "./components/mini/Title"

const App = () => {
  return (
<div className="  bg-gradient-to-b from-primary-100   flex flex-col gap-12 justify-center items-center ">
<Title/>
<SearchBox/>
<UserCard/>
<FollowerContainer/>

</div>
  )
}
export default App