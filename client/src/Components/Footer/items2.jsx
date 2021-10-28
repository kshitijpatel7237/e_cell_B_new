import React from "react"

function Item2(props){
	return(
		<div className="">
			<h2 className="text-xl font-semibold leading-loose">{props.head2}</h2>
			<h3 className="text-lg text-gray-500 hover:text-gray-900"><a href="#">{props.list2}</a></h3>
		</div>
	)
}

export default Item2

