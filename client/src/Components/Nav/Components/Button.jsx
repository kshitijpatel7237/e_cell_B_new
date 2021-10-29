import React from "react"

function Button(props){
    return(
        
        <button
			className={`text-black mb-auto mt-4 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none ${props.property}`}
			type="button"
			onClick={props.handleClick}>{props.children}</button>
    )
}
export default Button