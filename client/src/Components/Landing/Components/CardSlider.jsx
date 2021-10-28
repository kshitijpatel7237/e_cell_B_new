import React from "react"
//import Card from "@material-tailwind/react/Card";
import "./CardSlider.css"
export default function CardSlider() {

    //const [xCoordinate, setXCoordinate] = useState(0);
    var xCoordinate =0;
        const NextSlide =()=>{
            var element = document.getElementById("scrollbar");
            xCoordinate=xCoordinate+150;
            
            if(xCoordinate === 1050 || xCoordinate >1050)
            {
                xCoordinate=0;
            }
            element.scrollTo({
                top: 0,
  left: xCoordinate,
  behavior: 'smooth'});
        }
        const PreviousSlide =()=>{
            var element = document.getElementById("scrollbar");
            xCoordinate=xCoordinate-150;
            
            if(xCoordinate === 0 || xCoordinate <0)
            {
                xCoordinate=1050;
            }
            element.scrollTo({
                top: 0,
  left: xCoordinate,
  behavior: 'smooth'});
        }
	return (
        <div className="space-y-3 bg-custom-accent ">
<h1
        className="flex px-2.5 py-2.55 ml-10 font-sans font-medium antialiased text-4xl  text-custom-primary lg:ml-40 lg:mr-40 md:ml-20 md:mr-20"
      >
        Heading of sections
      </h1>
      <div className="relative grid grid-cols-3 gap-4">
      <h3 className="flex col-span-2 px-2.5 py-2.5 ml-10 text-2xl text-custom-primary lg:ml-40 lg:mr-40 md:ml-20 md:mr-20"> 
      Descriptions for sections</h3>
      
      <div className="">
      <div className="order-last inline-block mt-2 mr-2">
                   <button type="button" className="focus:outline-none text-gray-600 rounded-full text-sm py-2.5 px-2.5  
                   border border-gray-600 hover:bg-gray-50" onClick={PreviousSlide}>
                   <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">

                    <path fillRule="evenodd" 
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg></button>
                </div>
                <div className="order-last inline-block mt-2 mr-2">
                   <button type="button" className="focus:outline-none text-gray-600 rounded-full text-sm py-2.5 px-2.5  
                   border border-gray-600 hover:bg-gray-50" onClick={NextSlide}>
                   <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" 
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg></button>
                </div>
                </div>


</div>   
      <div id="scrollbar"
        className="flex pb-10 ml-10 mr-10 overflow-x-scroll hide-scroll-bar lg:ml-40 lg:mr-40 md:ml-20 md:mr-20"
      >
        <div
          className="flex flex-nowrap "
        >
          <div className="inline-block px-3">
            <div
              className="w-64 h-64 max-w-xs overflow-hidden transition duration-500 transform border-0 rounded-2xl hover:scale-110"
            >
                <img className="object-cover object-center w-full h-full rounded-2xl " src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80" alt="photo"/>
           
            </div>
            <h4 className="flex mt-4 text-xl font-semibold"> New York</h4>
            <h6 className="flex mt-4 text-xl "> 188,288 properties</h6>
          </div>
          <div className="inline-block px-3">
            <div
              className="w-64 h-64 max-w-xs overflow-hidden transition duration-500 transform border-0 rounded-2xl hover:scale-110"
              >
                <img className="object-cover object-center w-full h-full rounded-2xl" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo"/>
            </div>
            <h4 className="flex mt-4 text-xl font-semibold"> New York</h4>
            <h6 className="flex mt-4 text-xl "> 188,288 properties</h6>
          </div>
          <div className="inline-block px-3">
            <div
              className="w-64 h-64 max-w-xs overflow-hidden transition duration-500 transform border-0 rounded-2xl hover:scale-110"
            >
                <img className="object-cover object-center w-full h-full rounded-2xl " src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80" alt="photo"/>
           
            </div>
            <h4 className="flex mt-4 text-xl font-semibold"> New York</h4>
            <h6 className="flex mt-4 text-xl "> 188,288 properties</h6>
          </div>
          <div className="inline-block px-3">
            <div
              className="w-64 h-64 max-w-xs overflow-hidden transition duration-500 transform border-0 rounded-2xl hover:scale-110"
              >
                <img className="object-cover object-center w-full h-full rounded-2xl" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo"/>
            </div>
            <h4 className="flex mt-4 text-xl font-semibold"> New York</h4>
            <h6 className="flex mt-4 text-xl "> 188,288 properties</h6>
          </div>
          <div className="inline-block px-3">
            <div
              className="w-64 h-64 max-w-xs overflow-hidden transition duration-500 transform border-0 rounded-2xl hover:scale-110"
            >
                <img className="object-cover object-center w-full h-full rounded-2xl " src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80" alt="photo"/>
           
            </div>
            <h4 className="flex mt-4 text-xl font-semibold"> New York</h4>
            <h6 className="flex mt-4 text-xl "> 188,288 properties</h6>
          </div>
          <div className="inline-block px-3">
            <div
              className="w-64 h-64 max-w-xs overflow-hidden transition duration-500 transform border-0 rounded-2xl hover:scale-110"
              >
                <img className="object-cover object-center w-full h-full rounded-2xl" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo"/>
            </div>
            <h4 className="flex mt-4 text-xl font-semibold"> New York</h4>
            <h6 className="flex mt-4 text-xl "> 188,288 properties</h6>
          </div>
          <div className="inline-block px-3">
            <div
              className="w-64 h-64 max-w-xs overflow-hidden transition duration-500 transform border-0 rounded-2xl hover:scale-110"
            >
                <img className="object-cover object-center w-full h-full rounded-2xl " src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80" alt="photo"/>
           
            </div>
            <h4 className="flex mt-4 text-xl font-semibold"> New York</h4>
            <h4 className="flex mt-4 text-xl "> 188,288 properties</h4>
          </div>
          <div className="inline-block px-3">
            <div
              className="w-64 h-64 max-w-xs overflow-hidden transition duration-500 transform border-0 rounded-2xl hover:scale-110"
              >
                <img className="object-cover object-center w-full h-full rounded-2xl" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo"/>
            </div>
            <h4 className="flex mt-4 text-xl font-semibold"> New York</h4>
            <h6 className="flex mt-4 text-xl "> 188,288 properties</h6>
          </div>
        </div>
      </div>
      
</div>
		

	)
}