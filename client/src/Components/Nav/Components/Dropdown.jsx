import React from "react"

import DropdownIcon from "./Icons/DropdownIcon"
import Navlink from "./Navlink"

function Dropdown(props){
    return(
        <div className={`group flex ${props.display}`}>
            <div className="flex hover:opacity-75">
                <Navlink text={props.mainTitle} />
                {props.space}
                <DropdownIcon />
            </div>
            <div className={`border-2 border-grey-900 shadow-lg z-50 invisible absolute group-hover:visible bg-white rounded-lg ${props.align}`}>
                <Navlink text={props.li1} />
                <Navlink text={props.li2} />
                <Navlink text={props.li3} />
                <Navlink text={props.li4} />
                <Navlink text={props.li5} />
            </div>
        </div>
    )
}
export default Dropdown