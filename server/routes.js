export default function(app) {
    // Insert routes below
    app.use('/api/v1/user', require('./api/user'));
    app.use('/api/v1/auth', require('./auth/index').default);
}