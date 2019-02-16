import React from 'react'
import Navigation from '../../componens/navigation'

class Main extends React.Component {
	render() {
		const {section} = this.props
		return <div>
			<Navigation/>
			{section}
		</div>
	}
}

export default Main