const Cliente = require("../models/Cliente");
const Endereco = require("../models/Endereco");

module.exports = {
  async list(req, res) {
    const clientes = await Cliente.findAll({
      include: [{ association: "endereco" }],
    });

    return res.json(clientes);
  },

  async get(req, res) {
    const cliente = await Cliente.findByPk(req.params.id, {
      include: [{ association: "endereco" }],
    });

    if (!cliente) {
      return res.status(400).json({ erro: "Cliente não encontrado" });
    }

    return res.json(cliente);
  },

  async create(req, res) {
    const { cpf, nome, telefone, celular, email, tipo_sanguineo, id_endereco } =
      req.body;

    const endereco = await Endereco.findByPk(id_endereco);

    if (!endereco) {
      return res
        .status(400)
        .json({ erro: "Cliente inválido, endereço não encontrado" });
    }

    const cliente = await Cliente.create({
      cpf,
      nome,
      telefone,
      celular,
      email,
      tipo_sanguineo,
      id_endereco,
    });

    return res.status(201).json(cliente);
  },

  async update(req, res) {
    const { cpf, nome, telefone, celular, email, tipo_sanguineo, id_endereco } =
      req.body;

    const cliente = await Cliente.findByPk(req.params.id);

    if (!cliente) {
      return res.status(400).json({ erro: "Cliente não encontrado" });
    }
    if (id_endereco) {
      const endereco = await Endereco.findByPk(id_endereco);

      if (!endereco) {
        return res.status(400).json({ erro: "Endereço não encontrado" });
      }
    }

    cliente.cpf = cpf;
    cliente.nome = nome;
    cliente.telefone = telefone;
    cliente.celular = celular;
    cliente.email = email;
    cliente.tipo_sanguineo = tipo_sanguineo;
    cliente.id_endereco = id_endereco;

    await cliente.save();

    return res.status(200).json(cliente);
  },

  async delete(req, res) {
    const cliente = await Cliente.findByPk(req.params.id);

    if (!cliente) {
      return res.status(400).json({ erro: "Cliente não encontrado" });
    }

    await cliente.destroy();

    return res.status(200).send();
  },
};
