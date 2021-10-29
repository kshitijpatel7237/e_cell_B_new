import React from "react";

function Cards({ imgUrl, name }) {
    return (
        <div class="p-4 sm:w-1/2 lg:w-1/5  md:1/3  gap-y-px " >

            <div class="h-41 bg-white w-40 space-y-2 border-2 p-3 border-gray-200 border-opacity-60 rounded-3xl overflow-hidden flex flex-col items-center
            hover:bg-gray-100 transition duration-300 ease-in">
                <img class="lg:h-20 md:h-20 w-20 rounded-full object-cover object-center"
                    src={imgUrl} alt="blog" />
                <div class="pb-2 lg:h-30 md:h-20">
                    <h1 class="text-1xl pl-4 pr-4 text-black font-semibold mb-1">{name}</h1>
                    <h1 class="text-1xl text-gray-400 pl-4 pr-4 pb-2 font-semibold mb-1 ">New York</h1>

                    <button class="pl-4">
                        <span class="text-yellow-600 bg-yellow-100 rounded pl-2 pt-2 pb-2 pr-2 mr-5 font-semibold hover:bg-yellow-200 transition duration-1000 hover:scale-125">Rating: 4.9
                        </span>
                        {/* <svg stroke="currentColor" stroke-width="1" fill="#D3A81E"
                            viewBox="0 0 150 20">
                            <path d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218"></path>
                        </svg> */}
                    </button>

                </div>



                <div>
                </div>
            </div>


        </div >
    )
}


export default Cards;