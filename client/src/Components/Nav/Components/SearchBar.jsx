import React from "react"

import SearchIcon from "./Icons/SearchIcon"
function SearchBar(){
    return(
        <div className=" ml-auto bg-gray-200">
    		<div className="container flex justify-center items-center px-4 sm:px-6 lg:px-8">
        		<div className="relative"> <input type="text" className="h-14 w-64 pr-8 pl-5 rounded z-20 focus:shadow focus:outline-none" placeholder="Search anything..." />
            		<div className="absolute top-4 right-3"><SearchIcon /></div>
        		</div>
    		</div>
		</div>
    )
}
export default SearchBar