import React from 'react'
import {Link} from 'react-router-dom'
import nanoid from 'nanoid'
import logo from '../../assets/icons/otaku.png'
import avatar from '../../assets/icons/avatar.svg'
import menu from '../../assets/icons/menu.svg'
import './Navigation.scss'

class Navigation extends React.Component {
    state = {
        margin: -150,
        activeItem: this.props.sectionName,
        items: this.props.sections
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, false);
    }

    handleClickOutside = (e) => {
        const navigation = document.getElementsByClassName('navigation')[0];
        if (!e.path.includes(navigation)) {
            this.setState({margin: -150});
        }
    }

    onMenuClick = () => {
        const {margin} = this.state
        this.setState({margin: margin === 0 ? -150 : 0})
    }

    render() {
        const {margin, activeItem, items} = this.state
        return <div>
            <div className="navigation__wrapper"/>
            <div style={{marginLeft: margin}} className="navigation">
                <div className="navigation__header">
                    <img className="navigation__logo" src={logo} alt="#"/>
                    <img onClick={this.onMenuClick} className="navigation__menu" src={menu} alt="#"/>
                </div>
                <div className="navigation__content">
                    <div className="navigation__main">
                        <ul>
                            {items.map((page) => {
                                if (page.isNotMenuItem !== false) {
                                    return (<Link key={nanoid()} to={page.route}>
                                        <li
                                            className={`navigation__item ${page.id === activeItem ? 'navigation__item-active' : ''}`}
                                        >
                                            {page.name}
                                            {page.id !== undefined && (
                                                <img style={{
                                                    width: 30,
                                                    marginRight: 10
                                                }} width={100} src={page.icon} alt="#"/>
                                            )}
                                        </li>
                                    </Link>)
                                }
                                return null
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
        </div>
    }
}

export default Navigation
