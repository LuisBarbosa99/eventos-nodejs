const Evento = require("../model/evento");

class EventoController {
  async findAll(req, res, next) {
    
    const eventos = await evento.find().limit(20);
    return res.json(eventos);
  }
  async create(req, res, next) {
    
    const eventoCriado = await Evento.create(req.body);
    return res.json(eventoCriado);
  }
  async find(req, res, next) {
    
    const eventoEncontrado = await Evento.findOne({ codigo: req.params.id });
    return res.json(eventoEncontrado);
  }
  async delete(req, res, next) {
    
    await Evento.findOneAndRemove({ codigo: req.params.id });
    return res.send();
  }
  async update(req, res, next) {
    
    const eventoEditado = await Evento.findOneAndUpdate(
      { codigo: req.params.id },
      req.body,
      {
        new: true
      }
    );
    return res.json(eventoEditado);
  }
}
module.exports = new EventoController();
