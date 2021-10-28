import React from "react"

function Col1(){
	return(
		<div className="flex flex-col pl-2 text-left md:leading-loose md:pl-8 md:ml-8">
			<div>
			<img className="self-center w-32 pb-2" src="https://p.kindpng.com/picc/s/4-41697_cute-adidas-logo-png-logo-adidas-originals-vector.png" />
			</div>
            
			<a href="#" className="text-xl text-gray-500 hover:text-gray-900">
          		<i className="px-4 fab fa-facebook-f"></i>facebook
        	</a>
			<a href="#" className="text-xl text-gray-500 hover:text-gray-900">
          		<i className="px-4 fab fa-twitter"></i>twitter
        	</a>
			<a href="#" className="text-xl text-gray-500 hover:text-gray-900">
          		<i className="px-4 fab fa-instagram"></i>instagram
        	</a>
			<a href="#" className="text-xl text-gray-500 hover:text-gray-900">
          		<i className="px-4 fab fa-youtube"></i>youtube
        	</a>
			
			
		</div>
	)
}
export default Col1
