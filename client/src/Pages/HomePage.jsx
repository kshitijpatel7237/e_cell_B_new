import React from "react"
import CardSlider from "../Components/Landing/Components/CardSlider";
import Join from "../Components/Join_our_newsletter/join"
import Foot from "../Components/Footer/foot"

const HomePage = () => {
	return (
		<div className="space-y-4">
			<CardSlider/>
			<Join/>
			<Foot/>
		</div>
	)
}

export default HomePage
