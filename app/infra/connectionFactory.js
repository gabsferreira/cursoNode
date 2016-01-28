var mysql  = require('mysql');

function CreateDBConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'casadocodigo_nodejs'
    });
}
module.exports = function() {
  return CreateDBConnection;
}
