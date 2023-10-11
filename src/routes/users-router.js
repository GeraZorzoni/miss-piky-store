const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  // configuracion de guardado //
  destination: path.join(__dirname, "../../public/images/users/"), // destino donde va a guardar el archivo
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    ); // original name, deja extension del archivo
  },
});

const upload = multer({ storage: storage });

// ************ Controller Require ************
const usersController = require("../controllers/users-controller");

// Routes Users
router.get("/login", usersController.login);

/*** CREATE USER ***/
// Register form
router.get("/register", usersController.register);
// register process
router.post(
  "/register",
  upload.single("avatar"),
  usersController.processRegister
);

module.exports = router;
