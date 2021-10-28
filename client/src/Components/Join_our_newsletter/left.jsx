import React from "react"

function Left(){
	return(
		<div className="flex flex-col justify-center ml-10 text-left justify-items-start">
        	<h1 className="relative my-4 text-3xl font-extrabold ">Join Our NewsLetter🤩</h1>
			<p className="flex-wrap">Read and share new perspectives on just about any topic. Everyone’s welcome.</p>
			<ol className="my-4 leading-loose list-number">
				<li>🔥 Get more discount</li>
				<li>🔥 Get premium magazines</li>
			</ol>

			{/* <div className="relative flex flex-wrap items-stretch w-full mb-3">
  		<input type="text" placeholder="Placeholder" className="relative w-full px-3 py-3 pr-10 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"/>
  		<span className="absolute right-0 z-10 items-center justify-center w-8 h-full py-3 pr-3 text-base font-normal leading-snug text-center bg-transparent rounded text-blueGray-300">
    	<i className="fas fa-user"></i>
  		</span>
			</div> */}

			<input className="p-3 my-4 border-2 rounded-xl"   placeholder="Enter your email" type="email" />
			<button className="self-center w-6/12 p-2 bg-red-300 border-2 border-gray-600 hover:bg-red-400 md:w-1/4 rounded-xl ">Submit</button>
		</div>
	)
}

export default Left