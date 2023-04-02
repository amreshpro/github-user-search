import Follower from "./components/Follower"
import Info from "./components/Info"
import { Search } from "./components/Search"
import User from "./components/User"

const App = () => {
  return (
    <div className="w-screen h-screen bg-pink-200">

  <div className="container flex flex-col items-center ">
  <Search/>
  <Info/>

  </div>
  <div className="container2 flex items-center justify-center  gap-4 m-2 ">
<User/>
<Follower/>

  </div>

    </div>
  )
}
export default App