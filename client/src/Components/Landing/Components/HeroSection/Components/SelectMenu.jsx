import React from "react"
import PropTypes from "prop-types"

function SelectMenu(props) {
	const { buttonLabels } = props

	return (
		<div className="w-full relative mt-8 flex flex-col md:flex-row md:items-center rounded-3xl lg:rounded-full shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-900 divide-y divide-neutral-200 md:divide-y-0">
			{buttonLabels.map((data, index) => {
				return (
					<div className="relative flex flex-1.5" key={index}>
						<button className="flex flex-1 relative [ nc-hero-field-padding ] flex-shrink-0 items-center space-x-3 cursor-pointer focus:outline-none text-left focus:shadow-2xl rounded-full">
							<div className="text-neutral-300 dark:text-neutral-400">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="nc-icon-field"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="1.5"
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									></path>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="1.5"
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									></path>
								</svg>
							</div>
							<div className="flex-grow">
								<input
									className="block w-full bg-transparent border-none focus:ring-0 p-0 focus:outline-none focus:placeholder-neutral-300 xl:text-lg font-semibold placeholder-neutral-800 dark:placeholder-neutral-200 truncate"
									placeholder={data.label}
									value=""
								/>
								<span className="block mt-0.5 text-sm text-neutral-400 font-light ">
									<span className="line-clamp-1">
										{data.sublabel}
									</span>
								</span>
							</div>
						</button>
					</div>
				)
			})}
			<div className="px-4 py-4 lg:py-0">
				<button className="h-14 md:h-16 w-full md:w-16 rounded-full focus:bg-indigo-500 focus:text-white hover:bg-indigo-100 flex items-center justify-center text-neutral-50 focus:outline-none">
					<span className="mr-3 md:hidden">Search</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.5"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						></path>
					</svg>
				</button>
			</div>
		</div>
	)
}

SelectMenu.propTypes = {
	buttonLabels: PropTypes.array,
}

export default SelectMenu
