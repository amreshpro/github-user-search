import React from "react";
import {AiOutlineSearch} from 'react-icons/ai'
export const Search = () => {
  const [searchData, setSearchData] = React.useState("");

  const onSearchHandler = () => {
    console.log(searchData);
    console.log(searchData.length);

    // setSearchData('')
  };
  return (
    <div className="  flex flex-row justify-start flex-wrap bg-slate-100 w-fit">
        <AiOutlineSearch className="text-gray-500 text-3xl p-1 m-1 mt-2 "/>
      <input
        type="text"
        name="search"
        autoFocus={true}
        value={searchData}
        placeholder="search the github user..."
        onChange={(e) => {
          setSearchData(e.target.value);
        }}
        className="bg-slate-100 outline-none border-none placeholder-gray-500"
      />
      <button
        type="submimt"
        onClick={onSearchHandler}
        className="bg-blue-500 text-white text-center p-1  px-4  
        "
      >
        Search
      </button>
    </div>
  );
};
