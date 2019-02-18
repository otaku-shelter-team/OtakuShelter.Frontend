import React from 'react'
import {Redirect, Route, BrowserRouter as Router} from 'react-router-dom'
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
					<Redirect from="/" to="/account"/>
				</div>
			</Router>
		)
	}
}

export default App
