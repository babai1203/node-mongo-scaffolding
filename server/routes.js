export default function(app) {
    // Insert routes below
    // app.use('/api/v1/setting', require('./api/setting'));
    // app.use('/api/v1/service', require('./api/service'));
    // app.use('/api/v1/workspace', require('./api/workspace'));
    // app.use('/api/v1/group', require('./api/group'));
    // app.use('/api/v1/dashboard', require('./api/dashboard'));
    // app.use('/api/v1/admin', require('./api/admin'));
    // app.use('/api/v1/activity', require('./api/activity'));
    app.use('/api/v1/user', require('./api/user'));
    app.use('/api/v1/auth', require('./auth/index').default);
}