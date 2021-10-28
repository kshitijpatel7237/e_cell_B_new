import React from "react"

import Left from "./left"
import Right from "./right"

function Join(){
	return(
		<div className="grid grid-cols-1 col-auto mx-6 bg-custom-butto-accent md:grid-cols-2 l-0 justify-items-start">
        	<Left/>
			<Right/>
		</div>
	)
}

export default Join