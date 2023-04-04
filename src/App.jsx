
import { Search } from "./components/Search";

import Info from "./components/Info";
import User from "./components/User";
import Follower from "./components/Follower";


const App = () => {
  return (
  <>
  <div className="container bg-pink-200 pb-5 pt-5 ">

<div className="top  m-4 flex flex-col gap-4 justify-center items-center">
  <Search/>
  <Info/>
</div>
<div className="bottom  flex flex-wrap gap-2 justify-evenly items-center ">
  <User/>
  <Follower/>
</div>


  </div>
  
  
  </>
  );
};
export default App;
