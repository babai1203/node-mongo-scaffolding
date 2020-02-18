var all = {
    env: process.argv[2] || 'development'
}
module.exports = {
    getConstants: function(){
        return require(`./${all.env}.js`) || {};
    }
};