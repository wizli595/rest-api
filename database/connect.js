const mongoose = require("mongoose");
// connect to mongo db
mongoose
  .connect("mongodb://localhost:27017/rest_Api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((rs) => console.log("DB connected"))
  .catch((er) => console.log(er));
