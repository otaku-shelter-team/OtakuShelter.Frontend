import Login from '../App'
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
		render: (props) => <Main {...props} section={<Profile/>}/>
	},
	{
		name: 'account',
		route: '/account',
		render: (props) => <Main {...props} section={<Account/>}/>
	},
	{
		name: 'role',
		route: '/role',
		render: (props) => <Main {...props} section={<Role/>}/>
	},
	{
		name: 'manga',
		route: '/manga',
		render: (props) => <Main {...props} section={<Manga/>}/>
	},
	{
		name: 'token',
		route: '/token',
		render: (props) => <Main {...props} section={<Token/>}/>
	},
	{
		name: 'statistics',
		route: '/statistics',
		render: (props) => <Main {...props} section={<Statistics/>}/>
	}
]

export default pages