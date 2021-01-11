module.exports = {
    // environemnt key
    env: 'prod',
    //token hashing secret string
    token: {
        secret: 'ltnsdomwehatnwbu'
    },
    // MongoDB connection options
    mongo: {
        useMongoClient: true,
        uri: 'mongodb://localhost/product'
    },
    // Seed database on startup
    seedDB: true,
    // DB Migration scripts
    migrateDB: true
};