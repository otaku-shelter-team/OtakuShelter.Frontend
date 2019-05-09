import axios from 'axios'
import {Provider} from 'mobx-react'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './pages/App'
import * as serviceWorker from './serviceWorker'
import store from './store'

const isProduction = process.env.NODE_ENV === 'production';

(async () => {
    const rootEl = document.getElementById('root')

    const defaultHeaders = {
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json',
    }

    const developmentHeaders = {
        'X-Forwarded-Proto': 'http',
        'X-Forwarded-Host': 'localhost',
        'X-Forwarded-Port': '3000',
    }

    if (isProduction) {
        axios.defaults.headers.common = defaultHeaders
        axios.defaults.baseURL = ''
    } else {
        axios.defaults.headers.common = {
            ...developmentHeaders,
            ...defaultHeaders,
        }
        axios.defaults.baseURL = ''
    }

    // axios.interceptors.response.use(
    //     response => response,
    //     (error) => {
    //         if (error.response && error.response.status === 401) {
    //             window.location.reload();
    //         }
    //         return Promise.reject(error);
    //     }
    // );

    ReactDOM.render(
        <Provider {...store}>
            <App/>
        </Provider>,
        rootEl,
    )
})()

serviceWorker.unregister()
