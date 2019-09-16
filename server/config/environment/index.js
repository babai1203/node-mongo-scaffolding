var all = {
    env: process.env.NODE_ENV,
    // Server port
    port: process.env.PORT || 9000,
}

module.exports = {
    all:function(){
       return all.port;
    },
    typeOfProd: function(){
        return require(`./development.js`) || {};
        //return require(`./${process.env.NODE_ENV}.js`) || {};
    }
};