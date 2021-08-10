const Pessoa = require("../model/Pessoa");

class PessoaController {
  async index(req, res) {
    
    //param parser
    const mode = req.params.mode;
    const dataType = req.params.dataType;

    //regex ex /^eder/
    const data = await Pessoa.find({ [mode]: {'$regex' : '^' + dataType + '', '$options' : 'i'}});
    return res.json(data);
  }
}

module.exports = new PessoaController();
