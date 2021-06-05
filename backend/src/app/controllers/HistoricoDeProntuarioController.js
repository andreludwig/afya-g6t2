const HistoricoDeProntuario = require("../models/HistoricoDeProntuario");
const Especialista = require("../models/Especialista");

module.exports = {
  async list(req, res) {
    const historicoDeProntuarios = await HistoricoDeProntuario.findAll({
      include: [{ association: "especialista" }],
    });

    return res.json(historicoDeProntuarios);
  },

  async get(req, res) {
    const historicoDeProntuario = await HistoricoDeProntuario.findByPk(
      req.params.id,
      {
        include: [{ association: "especialista" }],
      }
    );

    if (!historicoDeProntuario) {
      return res
        .status(400)
        .json({ erro: "Histórico de prontuário não encontrado" });
    }

    return res.json(historicoDeProntuario);
  },

  async create(req, res) {
    const { data, hora, descricao, id_especialista } = req.body;

    const especialista = await Especialista.findByPk(id_especialista);

    if (!especialista) {
      return res.status(400).json({
        erro: "Especialista inválido, histórico de prontuário não encontrado",
      });
    }

    const historicoDeProntuario = await HistoricoDeProntuario.create({
      data,
      hora,
      descricao,
      id_especialista,
    });

    return res.status(201).json(historicoDeProntuario);
  },

  async update(req, res) {
    const { data, hora, descricao, id_especialista } = req.body;

    const historicoDeProntuario = await HistoricoDeProntuario.findByPk(req.params.id);

    if (!historicoDeProntuario) {
      return res.status(400).json({ erro: "Histórico de prontuário não encontrado" });
    }
    if (id_especialista) {
      const especialista = await Especialista.findByPk(id_especialista);

      if (!especialista) {
        return res.status(400).json({ erro: "Especialista não encontrado" });
      }
    }

    historicoDeProntuario.data = data;
    historicoDeProntuario.hora = hora;
    historicoDeProntuario.descricao = descricao;
    historicoDeProntuario.id_especialista = id_especialista;

    await historicoDeProntuario.save();

    return res.status(200).json(historicoDeProntuario);
  },

  async delete(req, res) {
    const historicoDeProntuario = await HistoricoDeProntuario.findByPk(req.params.id);

    if (!historicoDeProntuario) {
      return res.status(400).json({ erro: "Histórico de prontuário não encontrado" });
    }

    await historicoDeProntuario.destroy();

    return res.status(200).send();
  },
};
