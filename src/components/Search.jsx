import React,{useState,useContext} from "react";
import {AiOutlineSearch} from 'react-icons/ai'


import { MyContext } from "../context/MyContext";


export const Search = () => {

const myTest = useContext(MyContext)
const { searchGithubUser  } = myTest
//console.log(myTest)
//console.log(searchGithubUser)
// console.log(user)
// console.log(repos)
// console.log(follower)
  const [searchData, setSearchData] = useState("");

const onKeyUpHandler=(e)=>{
    if(e.key==='Enter'|| e.which ===14 ){
   searchGithubUser(searchData)
   setSearchData("")
    }
}

  const onSearchHandler = () => {
    //console.log(searchData)
 searchGithubUser(searchData)
    setSearchData("")
  };
  return (
    <div className=" shadow-lg mt-5 mb-5 flex flex-row justify-center items-center flex-wrap bg-slate-100 w-fit ">
        <AiOutlineSearch className="text-gray-500 text-3xl px-1 "/>
      <input
        type="text"
        name="search"
        autoFocus={true}
        value={searchData}
        placeholder="search the github user..."
        onChange={(e) => {
          setSearchData(e.target.value);
        }}
        
        onKeyUp={onKeyUpHandler}
        
        className="bg-slate-100 outline-none border-none placeholder-gray-500"
      />
      <button
        type="submimt"
        onClick={onSearchHandler}
        className="bg-blue-400 text-white text-center p-1  px-4 
        "
      >
        Search
      </button>
    </div>
  );
};
