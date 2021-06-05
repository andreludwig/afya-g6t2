const Usuario = require("../models/Usuario");

module.exports = {
  async list(req, res) {
    const usuarios = await Usuario.findAll();

    return res.json(usuarios);
  },

  async get(req, res) {
    const usuario = await Usuario.findByPk(req.params.id);

    if (!usuario) {
      return res.status(400).json({ erro: "Usuário não encontrado" });
    }

    return res.json(usuario);
  },

  async create(req, res) {
    const { login, senha, nome } = req.body;

    const usuario = await Usuario.create({
      login,
      senha,
      nome,
    });

    return res.status(201).json(usuario);
  },

  async update(req, res) {
    const usuario = await Usuario.findByPk(req.params.id);

    if (!usuario) {
      return res.status(400).json({ erro: "Usuário não encontrado" });
    }

    usuario.login = req.body.login;
    usuario.senha = req.body.senha;
    usuario.nome = req.body.nome;

    await usuario.save();

    return res.status(200).json(usuario);
  },

  async delete(req, res) {
    const usuario = await Usuario.findByPk(req.params.id);

    if (!usuario) {
      return res.status(400).json({ erro: "Usuário não encontrado" });
    }

    await usuario.destroy();

    return res.status(200).send();
  },
};
