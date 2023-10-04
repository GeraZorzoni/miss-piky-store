const express = require("express");
const app = express();
const path = require("path");

// Middlewares
app.use(express.static(path.join(__dirname, "../public")));

//Template Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); // Set carpeta views ejs

// Route System
const mainRouter = require("./routes/main-router");
app.use(mainRouter);

// Port
const PORT = 3011;
app.listen(PORT, () => {
  console.log(`Se prendió en el puerto ${PORT}`);
});
