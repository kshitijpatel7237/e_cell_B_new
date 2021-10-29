import React, { useState } from "react"
import PropTypes from "prop-types"

function Tabs(props) {
	const { labels, active } = props
	const [activeTab, setActiveTab] = useState(active)

	const tabElements = labels.map((label, index) => {
		return (
			<div
				key={index}
				className={`flex space-x-1 ${
					activeTab === index ? "font-bold" : ""
				}`}
				onClick={() => setActiveTab(index)}
			>
				<div
					className={`rounded-full w-2 h-2 ${
						activeTab === index ? "bg-black" : ""
					} my-auto`}
				/>
				<span>{label}</span>
			</div>
		)
	})
	return <div className="flex flex-row space-x-4">{tabElements}</div>
}

Tabs.propTypes = {
	labels: PropTypes.array,
	active: PropTypes.number,
}

export default Tabs
