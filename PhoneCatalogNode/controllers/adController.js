"use strict";

const { Anuncio } = require("../modelos");

class AdController {
  index(req, res, next) {
    res.locals.error = "";
    res.render("privado");
  }


  async post(req, res, next) {
    try {
      const { name, manufacturer, description, color, price,  screen, processor, ram } = req.body;
      const imageFileName = req.file.originalname;

      // buscar el usuario en la BD
      await Anuncio.insertMany({
        name,
        manufacturer,
        description,
        color,
        price,
        imageFileName,
        screen,
        processor,
        ram
      });
    
      res.json([req.body, `${req.file.path}`]);
    } catch (err) {
      res.json(err);
      next(err);
    }
  }
}

module.exports = AdController;
