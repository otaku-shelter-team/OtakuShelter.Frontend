const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(proxy('/roles', {
        target: 'http://accounts.staging.otaku-shelter.ru/',
        changeOrigin: true,
    }))
    app.use(proxy('/accounts', {
        target: 'http://accounts.staging.otaku-shelter.ru/',
        changeOrigin: true,
    }))
    app.use(proxy('/admin/accounts', {
        target: 'http://accounts.staging.otaku-shelter.ru/',
        changeOrigin: true,
    }))
    app.use(proxy('/mangas', {
        target: 'http://mangas.staging.otaku-shelter.ru/',
        changeOrigin: true,
    }))
    app.use(proxy('/admin/profiles', {
        target: 'http://profiles.staging.otaku-shelter.ru/',
        changeOrigin: true,
    }))
    app.use(proxy('/tokens', {
        target: 'http://accounts.staging.otaku-shelter.ru/',
        changeOrigin: true,
    }))
}
