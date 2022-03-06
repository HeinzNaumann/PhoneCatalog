var createError = require("http-errors");
var express = require("express");
var path = require("path");
const utils = require("./lib/utils");
const AdController = require("./controllers/adController");
const multer = require("multer");
const cors = require("cors");

const storage = multer.diskStorage({
  destination: "./public/images",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage,
  dest: "./public/images",
});

var app = express();

//conectamos a la base de datos
require("./lib/connectMongoose");


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/public/images")));
app.use(express.static(path.join(__dirname, "public")));
const adController = new AdController();

/**
 * Rutas de mi API
 */
app.post("/apiv1/anuncios", upload.single("imageFileName"), adController.post);


/**
 * Rutas de mi website
 */
app.use("/", require("./routes/index"));
app.disable('etag');


app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);

  if (utils.isAPIRequest(req)) {
    res.json({ error: err.message });
    return;
  }

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page

  res.render("error");
});

module.exports = app;
