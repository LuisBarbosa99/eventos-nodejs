//importando as bibliotecas necessárias
const mongoose = require("mongoose");

const eventoSchema = new mongoose.Schema(
  {
    codigo: {
      type: Number,
      required: true,
      unique: true
    },
    nome: {
      type: String,
      required: true
    },
    local: {
      type: String,
      required: true  
    },
    data: {
      type: String,
      required: true
    },
    horario: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);
//exportando nosso arquivo de modelo
module.exports = mongoose.model("Evento", eventoSchema);
