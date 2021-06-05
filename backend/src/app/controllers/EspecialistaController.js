const Especialista = require("../models/Especialista");
const Endereco = require("../models/Endereco");
const Profissao = require("../models/Profissao");

module.exports = {
  async list(req, res) {
    const especialistas = await Especialista.findAll({
      include: [{ association: "endereco" }, { association: "profissao" }],
    });

    return res.json(especialistas);
  },

  async get(req, res) {
    const especialista = await Especialista.findByPk(req.params.id, {
      include: [{ association: "endereco" }, { association: "profissao" }],
    });

    if (!especialista) {
      return res.status(400).json({ erro: "Especialista não encontrado" });
    }

    return res.json(especialista);
  },

  async create(req, res) {
    const {
      registro,
      nome,
      telefone,
      celular,
      email,
      id_endereco,
      id_profissao,
    } = req.body;

    const endereco = await Endereco.findByPk(id_endereco);

    if (!endereco) {
      return res
        .status(400)
        .json({ erro: "Especialista inválido, endereço não encontrado" });
    }

    const profissao = await Profissao.findByPk(id_profissao);

    if (!profissao) {
      return res
        .status(400)
        .json({ erro: "Especialista inválido, profissão não encontrada" });
    }

    const especialista = await Especialista.create({
      registro,
      nome,
      telefone,
      celular,
      email,
      id_endereco,
      id_profissao,
    });

    return res.status(201).json(especialista);
  },

  async update(req, res) {
    const {
      registro,
      nome,
      telefone,
      celular,
      email,
      id_endereco,
      id_profissao,
    } = req.body;

    const especialista = await Especialista.findByPk(req.params.id);

    if (!especialista) {
      return res.status(400).json({ erro: "Especialista não encontrado" });
    }
    if (id_endereco) {
      const endereco = await Endereco.findByPk(id_endereco);

      if (!endereco) {
        return res
          .status(400)
          .json({ erro: "Especialista inválido, endereço não encontrado" });
      }
    }

    if (id_profissao) {
      const profissao = await Profissao.findByPk(id_profissao);

      if (!profissao) {
        return res
          .status(400)
          .json({ erro: "Especialista inválido, profissão não encontrada" });
      }
    }

    especialista.registro = registro;
    especialista.nome = nome;
    especialista.telefone = telefone;
    especialista.celular = celular;
    especialista.email = email;
    especialista.id_endereco = id_endereco;
    especialista.id_profissao = id_profissao;

    await especialista.save();

    return res.status(200).json(especialista);
  },

  async delete(req, res) {
    const especialista = await Especialista.findByPk(req.params.id);

    if (!especialista) {
      return res.status(400).json({ erro: "Especialista não encontrado" });
    }

    await especialista.destroy();

    return res.status(200).send();
  },
};
