const mongoose = require("mongoose");

const PessoaSchema = new mongoose.Schema(
  {
    nome: String,
    cpf: String,
    nasc: String
  },
  {
    //force set collection name 
    collection: 'Pessoas'
  }
);

module.exports = mongoose.model("Pessoa", PessoaSchema);
