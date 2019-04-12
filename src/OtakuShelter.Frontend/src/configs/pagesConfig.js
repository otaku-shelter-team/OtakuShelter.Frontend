// import Login from '../pages/login'
import React from 'react'
// import AdminMain from '../pages/admin'
// import Profile from '../pages/admin/profile'
// import Account from '../pages/admin/account'
// import AdminManga from '../pages/admin/manga'
// import Token from '../pages/admin/token'
// import Statistics from '../pages/admin/statistics'
import UserMain from "../pages/user";
import MangaList from "../pages/user/mangaList";
import Bookmarks from "../pages/user/bookmarks";
import UserManga from "../pages/user/manga";
import icons from "./iconsConfig";

const pages = [
    // {
    //     name: '()Профили',
    //     route: '/profile',
    //     render: (props) => <AdminMain {...props} section={<Profile/>} sectionName="profile"/>
    // },
    // {
    //     name: '()Аккаунты',
    //     route: '/account',
    //     render: (props) => <AdminMain {...props} section={<Account/>} sectionName="account"/>
    // },
    // {
    //     name: '()Манга Админ',
    //     route: '/manga-admin',
    //     render: (props) => <AdminMain {...props} section={<AdminManga/>} sectionName="manga"/>
    // },
    // {
    //     name: '()Токены',
    //     route: '/token',
    //     render: (props) => <AdminMain {...props} section={<Token/>} sectionName="token"/>
    // },
    // {
    //     name: '()Статистика',
    //     route: '/statistics',
    //     render: (props) => <AdminMain {...props} section={<Statistics/>} sectionName="statistics"/>
    // },
    {
        id: 'manga-list',
        name: 'Манга',
        icon: icons['manga-list'],
        route: '/manga',
        render: (props) => <UserMain {...props} component={<MangaList {...props}/>}/>,
    },
    {
        id: 'bookmarks',
        name: 'Закладки',
        icon: icons['bookmarks'],
        route: '/bookmarks',
        render: (props) => <UserMain {...props} component={<Bookmarks {...props}/>}/>,
    },
    {
        id: 'manga',
        name: 'manga',
        route: '/manga/:id',
        render: (props) => <UserMain {...props} component={<UserManga {...props}/>}/>,
        isNotMenuItem: false
    }
]

export default pages
