const express = require("express");
const { default: mongoose } = require("mongoose");
const productRouter = require("./routes/prdouctRoutes.js");
var cors = require("cors");
const app = express();
mongoose
  .connect(
    "mongodb+srv://nijatzaman:1234_Jerusalem@cluster0.loje51j.mongodb.net/codeacademymydb"
  )

  .then((res) => {
    console.log("connect");
  })
  .catch((err) => {
    console.log("err", err);
  });

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
// app.use(function (req, res, next) {
//   if (false) {
//     res.status(401).json("Access error");
//   } else {
//     next();
//   }
// });

app.get("/", (req, res) => {
  res.json("hello");
});

app.use("/products", productRouter);
app.listen(8080);
