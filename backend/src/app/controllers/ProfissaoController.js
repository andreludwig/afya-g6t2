const Profissao = require("../models/Profissao");

module.exports = {
  async list(req, res) {
    const profissoes = await Profissao.findAll();

    return res.json(profissoes);
  },

  async get(req, res) {
    const profissao = await Profissao.findByPk(req.params.id);

    if (!profissao) {
      return res.status(400).json({ erro: "Profissão não encontrada" });
    }

    return res.json(profissao);
  },

  async create(req, res) {
    const { nome } = req.body;

    const profissao = await Profissao.create({
      nome,
    });

    return res.status(201).json(profissao);
  },

  async update(req, res) {
    const profissao = await Profissao.findByPk(req.params.id);

    if (!profissao) {
      return res.status(400).json({ erro: "Profissão não encontrada" });
    }

    profissao.nome = req.body.nome;

    await profissao.save();

    return res.status(200).json(profissao);
  },

  async delete(req, res) {
    const profissao = await Profissao.findByPk(req.params.id);

    if (!profissao) {
      return res.status(400).json({ erro: "Profissão não encontrada" });
    }

    await profissao.destroy();

    return res.status(200).send();
  },
};
