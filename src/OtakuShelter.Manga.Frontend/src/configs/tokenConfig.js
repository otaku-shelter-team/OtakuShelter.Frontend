import axios from 'axios'

const defaultHeaders = {
	Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjExIiwicm9sZSI6ImFkbWluIiwibmJmIjoxNTUwNDA5OTIyLCJleHAiOjE1NTEwMTQ3MjIsImlhdCI6MTU1MDQwOTkyMiwiaXNzIjoib3Rha3VzaGVsdGVyLmlzc3VlciIsImF1ZCI6Im90YWt1c2hlbHRlci5hdWRpZW5jZSJ9.4P8L9vw57q_sDhtUkEfoF4Sb52T-ipouhVlH3B1-i9E',
	'X-Requested-With': 'XMLHttpRequest',
	Accept: 'application/json'
}


axios.defaults.headers.common = {...defaultHeaders}

axios.interceptors.response.use(
	response => response,
	(error) => {
		if (error.response && error.response.status === 401) {
			window.location.reload()
		}
		return Promise.reject(error)
	}
)
