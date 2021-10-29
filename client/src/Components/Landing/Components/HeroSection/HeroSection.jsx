import React from "react"
import SelectMenu from "./Components/SelectMenu"
import Tabs from "./Components/Tabs"

function HeroSection() {
	return (
		<main className="relative h-auto min-h-screen flex flex-col lg:flex-row max-h-screen">
			<div className="flex flex-col w-full justify-center align-middle px-20 text-left space-y-8 py-20">
				<div className="text-7xl font-semibold text-gray-800">
					Anime, Manga <br />
					and Nothing else
				</div>
				<div className="text-lg text-gray-600">
					Binge with us 24/7/365 and get the best of your life <br />
					Watch anime, read manga, and more.
				</div>
				<button
					type="button"
					className="w-max inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>
					Let`s get watching
				</button>
			</div>
			<div className="flex flex-row w-2/3 mx-auto lg:w-full space-x-3 h-full max-h-screen px-5">
				<div className="flex flex-col w-1/2 h-auto space-y-3 py-10">
					<img
						src="/HeroSection/anime-deku.png"
						alt="Deku"
						className="object-cover h-1/2 object-top"
					/>
					<img
						src="/HeroSection/anime-tanjiro.jpg"
						alt="Tanjiro"
						className="object-cover h-1/2 object-top"
					/>
				</div>
				<div className="flex flex-col h-auto justify-end py-7 w-1/2">
					<img
						src="/HeroSection/anime-luffy.jpg"
						alt="Luffy"
						className="object-cover h-2/3"
					/>
				</div>
			</div>
			<div className="relative my-5 lg:absolute p-8 bottom-16 left-24 lg:left-36">
				<Tabs labels={["Anime", "Manga", "OVAs"]} active={0} />
			</div>
			<div className="relative my-5 lg:absolute p-8 -bottom-10 w-full px-20 lg:px-48">
				<SelectMenu
					buttonLabels={[
						{ label: "Select Anime", sublabel: "Type the Anime" },
						{ label: "Select Type", sublabel: "Type the Type" },
						{ label: "Select Author", sublabel: "Type the Author" },
						{ label: "Select Genre", sublabel: "Type the Genre" },
					]}
				/>
			</div>
		</main>
	)
}

export default HeroSection
