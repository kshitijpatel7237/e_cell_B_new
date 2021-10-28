import React from "react"

import Col1 from "./col1"
import Col2 from "./col2"
import Col3 from "./col3"
import Col4 from "./col4"

function Footer(){
	return(
		<div className="grid grid-cols-2 gap-4 py-8 bg-gray-300 md:grid-cols-4">
        	<Col1 />
        	<Col2 />
        	<Col3 />
        	<Col4 />
        	
		</div>
	)
}

export default Footer