const Prontuario = require("../models/Prontuario");
const Cliente = require("../models/Cliente");
const HistoricoDeProntuario = require("../models/HistoricoDeProntuario");

module.exports = {
  async list(req, res) {
    const prontuarios = await Prontuario.findAll({
      include: [
        { association: "cliente" },
        { association: "historico_de_prontuario" },
      ],
    });

    return res.json(prontuarios);
  },

  async get(req, res) {
    const prontuario = await Prontuario.findByPk(req.params.id, {
      include: [
        { association: "cliente" },
        { association: "historico_de_prontuario" },
      ],
    });

    if (!prontuario) {
      return res.status(400).json({ erro: "Prontuário não encontrado" });
    }

    return res.json(prontuario);
  },

  async create(req, res) {
    const { data_abertura, id_cliente, id_historico_de_prontuario } = req.body;

    const cliente = await Cliente.findByPk(id_cliente);

    if (!cliente) {
      return res.status(400).json({
        erro: "Cliente inválido, prontuário não encontrado",
      });
    }

    const historicoDeProntuario = await HistoricoDeProntuario.findByPk(
      id_historico_de_prontuario
    );

    if (!historicoDeProntuario) {
      return res.status(400).json({
        erro: "Histórico de prontúario inválido, prontuário não encontrado",
      });
    }

    const prontuario = await Prontuario.create({
      data_abertura,
      id_cliente,
      id_historico_de_prontuario,
    });

    return res.status(201).json(prontuario);
  },

  async update(req, res) {
    const { data_abertura, id_cliente, id_historico_de_prontuario } = req.body;

    const prontuario = await Prontuario.findByPk(req.params.id);

    if (!prontuario) {
      return res.status(400).json({ erro: "Prontuário não encontrado" });
    }

    if (id_cliente) {
      const cliente = await Cliente.findByPk(id_cliente);

      if (!cliente) {
        return res.status(400).json({ erro: "Cliente não encontrado" });
      }
    }

    if (id_historico_de_prontuario) {
      const historicoDeProntuario = await HistoricoDeProntuario.findByPk(
        id_historico_de_prontuario
      );

      if (!historicoDeProntuario) {
        return res
          .status(400)
          .json({ erro: "Histórico de prontuário não encontrado" });
      }
    }

    prontuario.data_abertura = data_abertura;
    prontuario.id_cliente = id_cliente;
    prontuario.id_historico_de_prontuario = id_historico_de_prontuario;

    await prontuario.save();

    return res.status(200).json(prontuario);
  },

  async delete(req, res) {
    const prontuario = await Prontuario.findByPk(req.params.id);

    if (!prontuario) {
      return res.status(400).json({ erro: "Prontuário não encontrado" });
    }

    await prontuario.destroy();

    return res.status(200).send();
  },
};
