import axios from 'axios'

const defaultHeaders = {
	Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjExIiwicm9sZSI6ImFkbWluIiwibmJmIjoxNTUwNTAxODAzLCJleHAiOjE1NTExMDY2MDMsImlhdCI6MTU1MDUwMTgwMywiaXNzIjoib3Rha3VzaGVsdGVyLmlzc3VlciIsImF1ZCI6Im90YWt1c2hlbHRlci5hdWRpZW5jZSJ9.lYrVAsvMIn6SoLwe9bNBYV0_28MNDbISlZZOUc50JD4',
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
