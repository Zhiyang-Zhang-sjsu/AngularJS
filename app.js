let express = require("express");
let cors = require("cors");
let app = express();

app.use(cors())

let router = express.Router();

router.get("/Sum", function(req, res) {
  let a = req.query.a;
  let b = req.query.b;
  let c = parseInt(a) + parseInt(b); 

  res.status(200).json(c);
});

app.use("/", router);

app.listen("3000", function() {
  console.log("Started listening at 3000...");
});