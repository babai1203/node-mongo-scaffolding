export default function(app) {
    // Insert routes below
    app.use('/user', require('./routes/user'));
    app.use('/auth', require('./auth/index').default);
}