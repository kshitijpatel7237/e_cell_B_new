import React from "react"

import Dropdown from "./Dropdown"
import Navlink from "./Navlink"

function MainLinks(props){
    return (
        <div className="flex flex-row justify-center hidden lg:flex mr-auto">
            <div><Navlink text={props.l1} /></div>
            <Dropdown mainTitle={props.l2} li1="Stay page" li2="Stay detail" li3="Experiences page" li4="Experiences detail" li5="Cars detail" display="flex-col" align="mt-12" />
            <Dropdown mainTitle={props.l3} li1="Checkout" li2="Pay done" li3="Author page" li4="Account page" display="flex-col" align="mt-12" />
            <div><Navlink text={props.l4} /></div>
        </div>
    )
}
export default MainLinks