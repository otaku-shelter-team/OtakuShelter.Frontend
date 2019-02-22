import Login from '../pages/login'
import React from 'react'
import Main from '../pages/main'
import Profile from '../pages/main/profile'
import Account from '../pages/main/account'
import Role from '../pages/main/role'
import Manga from '../pages/main/manga'
import Token from '../pages/main/token'
import Statistics from '../pages/main/statistics'

const pages = [
	{
		name: 'login',
		route: '/login',
		render: (props) => <Login {...props} section={'login'}/>
	},
	{
		name: 'profile',
		route: '/profile',
		render: (props) => <Main {...props} section={<Profile/>} sectionName="profile"/>
	},
	{
		name: 'account',
		route: '/account',
		render: (props) => <Main {...props} section={<Account/>} sectionName="account"/>
	},
	{
		name: 'role',
		route: '/role',
		render: (props) => <Main {...props} section={<Role/>} sectionName="role"/>
	},
	{
		name: 'manga',
		route: '/manga',
		render: (props) => <Main {...props} section={<Manga/>} sectionName="manga"/>
	},
	// TODO: FIXME
	// {
	// 	name: 'token',
	// 	route: '/token',
	// 	render: (props) => <Main {...props} section={<Token/>} sectionName="token"/>
	// },
	{
		name: 'statistics',
		route: '/statistics',
		render: (props) => <Main {...props} section={<Statistics/>} sectionName="statistics"/>
	}
]

export default pages