import React from "react"
import CardSlider from "../Components/Landing/Components/CardSlider"
import Join from "../Components/Join_our_newsletter/join"
import Foot from "../Components/Footer/foot"
import HeroSection from "../Components/Landing/Components/HeroSection/HeroSection"

const HomePage = () => {
	return (
		<div className="space-y-4">
			<HeroSection />
			<CardSlider />
			<Join />
			<Foot />
		</div>
	)
}

export default HomePage
