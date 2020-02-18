export default function(app) {
    // Insert routes below
    app.use('/user', require('./routes/user'));
    app.use('/setting', require('./routes/setting'));
    app.use('/auth', require('./auth/index').default);
}