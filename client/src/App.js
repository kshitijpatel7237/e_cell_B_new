import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import "./App.css"
import HomePage from "./Pages/HomePage"
import TeamsPage from "./Pages/TeamsPage"

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/" component={HomePage} exact/>
					<Route path="/team" component={TeamsPage} exact/>
				</Switch>
			</div>
		</Router>
	)
}

export default App
