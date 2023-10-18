//imports
const express = require("express");
const cors = require("cors");
const usrRoute = require("./routes/userRoute");
require("./database/connect");
// end

//initial the express app
const app = express();
const port = 3000;
// to read json body
app.use(express.json());
app.use(cors());

// initial the user route as middelware
app.use("/api/user", usrRoute);
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
