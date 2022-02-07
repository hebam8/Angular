const express = require("express");

const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3000;
app.get("/", function (req, res) {
  res.send("Hello from node server");
});

app.post("/enroll", function (req, res) {
  console.log(req.body);
  res.status(200).send({ data: "Registered successfully" });
});
app.post("/login", function (req, res) {
  console.log(req.body);
  res.status(200).send("welcome");
});

app.listen(PORT, function () {
  console.log("connecting", PORT);
});
