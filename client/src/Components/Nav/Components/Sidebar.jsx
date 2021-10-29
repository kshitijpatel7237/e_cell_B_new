import React from "react"

import Navlink from "./Navlink"
import Dropdown from "./Dropdown"
import SearchBar from "./SearchBar"

function Sidebar(props){
    return(
        <div className={"lg:hidden flex-grow w-10 items-center" + (props.navbarOpen ? " flex" : " hidden")}>
	    	<div className="flex flex-col divide-y-2 divide-black-900 list-none">
				<div className="w-64">
					<br />
					<p>Discover the most outstanding articles on all topics of life. Write your stories and share them.</p>
					<br />
					<SearchBar />					
				</div>
	    		<Navlink text={props.l1} />
				<Dropdown mainTitle={props.l2} li1="Stay page" li2="Stay detail" li3="Experiences page" li4="Experiences detail" li5="Cars detail" display="flex-col" align="ml-64" space="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" />
            	<Dropdown mainTitle={props.l3} li1="Checkout" li2="Pay done" li3="Author page" li4="Account page" display="flex-row" align="ml-64" space="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" />
            	<Navlink text={props.l4} />
	    	</div>
	    </div>
    )
}
export default Sidebar