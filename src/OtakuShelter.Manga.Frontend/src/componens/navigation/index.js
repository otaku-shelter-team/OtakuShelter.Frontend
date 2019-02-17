import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/icons/otaku.png'
import avatar from '../../assets/icons/avatar.svg'
import menu from '../../assets/icons/menu.svg'
import './Navigation.scss'
import pages from '../../configs/pagesConfig'

class Navigation extends React.Component {
	state = {
		margin: 0,
		activeItem: this.props.sectionName
	}

	onMenuClick = () => {
		const {margin} = this.state
		this.setState({margin: margin === 0 ? -150 : 0})
	}

	render() {
		const {margin, activeItem} = this.state
		return <div style={{marginLeft: margin}} className="navigation">
			<div className="navigation__header">
				<img className="navigation__logo" src={logo} alt="#"/>
				<img onClick={this.onMenuClick} className="navigation__menu" src={menu} alt="#"/>
			</div>
			<div className="navigation__content">
				<div className="navigation__main">
					<ul>
						{pages.map((page) => {
							if (page.name !== 'login') {
								return (<Link to={page.route}>
									<li
										className={`navigation__item ${page.name === activeItem ? 'navigation__item-active' : ''}`}
									>
										{page.name}
									</li>
								</Link>)
							}
						})}
					</ul>
				</div>
			</div>
			<div className="navigation__footer">
				<div className="navigation__avatar-container">
					<div className="navigation__avatar" style={{marginLeft: margin === -150 ? 68 : margin}}>
						<img className="navigation__avatar-image" src={avatar} alt="#"/>
					</div>
					<div style={{
						marginLeft: margin === -150 ? margin * 2 : margin,
						opacity: margin === -150 ? 0 : 1
					}} className="navigation__user">
						<strong>user</strong>
					</div>
				</div>
			</div>
		</div>
	}
}

export default Navigation