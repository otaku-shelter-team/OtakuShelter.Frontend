const proxy = require('http-proxy-middleware')

module.exports = function(app) {
	app.use(proxy('/roles', {
		target: 'http://account.otaku-shelter.ru/',
		changeOrigin: true,
	}))
	app.use(proxy('/accounts', {
		target: 'http://account.otaku-shelter.ru/',
		changeOrigin: true,
	}))
	app.use(proxy('/admin/accounts', {
		target: 'http://account.otaku-shelter.ru/',
		changeOrigin: true,
	}))
	app.use(proxy('/mangas', {
		target: 'http://manga.otaku-shelter.ru/',
		changeOrigin: true,
	}))
	app.use(proxy('/admin/profiles', {
		target: 'http://profile.otaku-shelter.ru/',
		changeOrigin: true,
	}))
	app.use(proxy('/tokens', {
		target: 'http://account.otaku-shelter.ru/',
		changeOrigin: true,
	}))
}