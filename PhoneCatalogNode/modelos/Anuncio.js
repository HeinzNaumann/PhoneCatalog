"use strict";

const mongoose = require("mongoose");

//definimos un schema
const anuncioSchema = mongoose.Schema({
  name: String,
  manufacturer: String,
  description: String,
  color: String,
  price: Number,
  imageFileName: String,
  screen: String,
  processor: String,
  ram: Number,
});


//creamos el modelo

const Anuncio = mongoose.model("Anuncio", anuncioSchema);

//exportamos el modelo (opcional)

module.exports = Anuncio;
