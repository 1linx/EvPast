var configValues = require('./config');

module.exports = {
    getDbConnectionString: function() {
        return 'mongodb://' + configValues.username + ':' + configValues.password + '@ds025439.mlab.com:25439/alw_todolist';
    }
}