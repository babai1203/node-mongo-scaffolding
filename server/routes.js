export default function(app) {
    app.use('/api/v1/user', require('./api/user'));
    app.use('/api/v1/auth', require('./auth/index').default);
}