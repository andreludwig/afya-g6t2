const Atendimento = require("../models/Atendimento");
const Cliente = require("../models/Cliente");

module.exports = {
  async list(req, res) {
    const atendimentos = await Atendimento.findAll({
      include: [{ association: "cliente" }],
    });

    return res.json(atendimentos);
  },

  async get(req, res) {
    const atendimento = await Atendimento.findByPk(req.params.id, {
      include: [{ association: "cliente" }],
    });

    if (!atendimento) {
      return res.status(400).json({ erro: "Atendimento não encontrado" });
    }

    return res.json(atendimento);
  },

  async create(req, res) {
    const {
      data_agendamento,
      data_atendimento,
      hora_atendimento,
      valor,
      atendimento_status,
      id_cliente,
    } = req.body;

    const cliente = await Cliente.findByPk(id_cliente);

    if (!cliente) {
      return res
        .status(400)
        .json({ erro: "Cliente inválido, atendimento não encontrado" });
    }

    const atendimento = await Atendimento.create({
      data_agendamento,
      data_atendimento,
      hora_atendimento,
      valor,
      atendimento_status,
      id_cliente,
    });

    return res.status(201).json(atendimento);
  },

  async update(req, res) {
    const {
      data_agendamento,
      data_atendimento,
      hora_atendimento,
      valor,
      atendimento_status,
      id_cliente,
    } = req.body;

    const atendimento = await Atendimento.findByPk(req.params.id);

    if (!atendimento) {
      return res.status(400).json({ erro: "Atendimento não encontrado" });
    }
    if(id_cliente){
      const cliente = await Cliente.findByPk(id_cliente);

      if (!cliente) {
        return res.status(400).json({ erro: "Cliente não encontrado" });
      }
    }

    atendimento.data_agendamento = data_agendamento;
    atendimento.data_atendimento = data_atendimento;
    atendimento.hora_atendimento = hora_atendimento;
    atendimento.valor = valor;
    atendimento.atendimento_status = atendimento_status;
    atendimento.id_cliente = id_cliente;

    await atendimento.save();

    return res.status(200).json(atendimento);
  },

  async delete(req, res) {
    const atendimento = await Atendimento.findByPk(req.params.id);

    if (!atendimento) {
      return res.status(400).json({ erro: "Atendimento não encontrado" });
    }

    await atendimento.destroy();

    return res.status(200).send();
  },
};
