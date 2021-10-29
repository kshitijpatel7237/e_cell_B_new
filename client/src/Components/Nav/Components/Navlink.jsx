import React from "react"

import {Link} from "react-router-dom"
function Navlink(props){
    return (
        <div>
        <Link to="/" className="px-3 py-2 flex items-center text-xl font-semibold mt-2 text-custom-muted hover:opacity-75 ml-2">{props.text}</Link>
       </div>
    )
}
export default Navlink