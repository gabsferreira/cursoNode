function ProdutosDAO(connection) {
    this._connection = connection;
}

ProdutosDAO.prototype.lista = function(callback) {
    this._connection.query('select * from livro',callback);
}

ProdutosDAO.prototype.salva = function(livro, callback) {
   console.log(livro.titulo);
    this._connection.query('insert into livro set ?',livro, callback);
}

module.exports = function(){
    return ProdutosDAO;
};
