import { useState} from "react"
import React from "react"

import Sidebar from "./Components/Sidebar"
import Button from "./Components/Button"
import MainLinks from "./Components/MainLinks"
import MainHeading from "./Components/MainHeading"
import DarkModeIcon from "./Components/Icons/DarkModeIcon"
import SearchIcon from "./Components/Icons/SearchIcon"
import HamburgerIcon from "./Components/Icons/HamburgerIcon"

function Nav(){
	const [navbarOpen,setNavbarOpen] = useState(false)
	const [darkMode,setDarkMode]=useState(false)
	return(
		<nav className="relative flex flex-wrap font-sans z-50 items-center justify-between py-3 mb-3 bg-white-900">
			<div className="container mx-auto flex flex-wrap items-center justify-between">
				<div className="w-screen relative flex justify-end lg:static lg-inline-block">
					<MainHeading />						
					<MainLinks l1="Home" l2="Listing Page" l3="Templates" l4="Other Pages" />
					<Button handleClick={()=>setDarkMode(!darkMode)}>
						<DarkModeIcon darkMode={darkMode} />
					</Button>
					<Button>
						<SearchIcon />
					</Button>
					<Button handleClick={()=>setNavbarOpen(!navbarOpen)} property="lg:hidden">
						<HamburgerIcon />
					</Button>
					<button className="text-xl p-4 hover:bg-indigo-700 text-custom-secondary h-16 w-32 bg-custom-button-accent rounded-full">Sign up</button>
				</div>
				<Sidebar l1="Home" l2="Listing Page" l3="Templates" l4="Other Pages" navbarOpen={navbarOpen} />
			</div>
		</nav>
	)
}

export default Nav
