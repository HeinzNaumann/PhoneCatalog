var express = require("express");
var router = express.Router();

const Anuncio = require("../modelos/Anuncio");

/* GET home page. */
router.get("/", async function (req, res, next) {
  try {
    const anuncios = await Anuncio.find();
    res.json( anuncios );
  } catch (err) {
    next(err);
  }
});


router.get("/adverts/:id", async function (req, res, next) {
  try {
    const id = req.params.id;
    const anuncios = await Anuncio.findById(id);
    res.json( anuncios );
  } catch (err) {
    next(err);
  }
});


router.delete("/adverts/:id", async function (req, res, next) {
  try {
    id = req.params.id;
    const auncioEliminado = await Anuncio.deleteOne({ _id: id });
   // fs.unlinkSync en caso de querer borrar el archivo 
    res.json({ auncioEliminado });

  } catch (err) {
    next(err);
  }
});

router.post("/adverts", async (req, res, next) => {
  try {
    const anuncioData = req.body;
    // creo un objeto de tipo Anuncio EN MEMORIA
    const anuncio = new Anuncio(anuncioData); 
    const anuncioCreado = await anuncio.save();

    res.status(201).json({ result: anuncioCreado });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
