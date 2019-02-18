import React from 'react'
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import pages from './configs/pagesConfig'
import './configs/tokenConfig'
import './App.scss'

class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					{pages.map((page) =>
						<Route
							key={page.name}
							exact
							path={page.route}
							render={(props) => page.render(props)}
						/>
					)}
					<Redirect from="/" to="/login"/>
				</div>
			</Router>
		)
	}
}

export default App
