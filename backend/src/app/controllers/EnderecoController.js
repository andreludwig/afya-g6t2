const Endereco = require("../models/Endereco");

module.exports = {
  async list(req, res) {
    const enderecos = await Endereco.findAll();

    return res.json(enderecos);
  },

  async get(req, res) {
    const endereco = await Endereco.findByPk(req.params.id);

    if (!endereco) {
      return res.status(400).json({ erro: "Endereço não encontrado" });
    }

    return res.json(endereco);
  },

  async create(req, res) {
    const { cep, logradouro, numero, bairro, localidade, uf } = req.body;

    const endereco = await Endereco.create({
      cep,
      logradouro,
      numero,
      bairro,
      localidade,
      uf,
    });

    return res.status(201).json(endereco);
  },

  async update(req, res) {
    const endereco = await Endereco.findByPk(req.params.id);

    if (!endereco) {
      return res.status(400).json({ erro: "Endereço não encontrado" });
    }

    endereco.cep = req.body.cep;
    endereco.logradouro = req.body.logradouro;
    endereco.numero = req.body.numero;
    endereco.bairro = req.body.bairro;
    endereco.localidade = req.body.localidade;
    endereco.uf = req.body.uf;

    await endereco.save();

    return res.status(200).json(endereco);
  },

  async delete(req, res) {
    const endereco = await Endereco.findByPk(req.params.id);

    if (!endereco) {
      return res.status(400).json({ erro: "Endereço não encontrado" });
    }

    await endereco.destroy();

    return res.status(200).send();
  },
};
