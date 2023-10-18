const { Router } = require("express");
const user = require("../database/user");
const route = new Router();

// fetch all users
route.get("/", (req, res) => {
  user
    .find()
    .then((usr) => res.send(usr))
    .catch((err) => res.send(err));
});

// fetch by id
route.get("/:id", (req, resp) => {
  const { id } = req.params;
  user
    .findById(id)
    .then((usr) => resp.send(usr))
    .catch((err) => resp.send(err));
});
//create user
route.post("/create", (req, resp) => {
  console.log(req.body);
  user
    .create(req.body)
    .then((rp) => resp.sendStatus(201))
    .catch((err) => resp.send(err));
});
// update user
route.put("/update/:id", (req, rsp) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  user
    .findByIdAndUpdate(id, {
      name: name,
      email: email,
      age: age,
    })
    .then((rs) => rsp.sendStatus(200))
    .catch((err) => console.log(err));
});
// delete user
route.delete("/delete/:id", (req, resp) => {
  const { id } = req.params;
  user
    .findByIdAndDelete(id)
    .then((rs) => resp.sendStatus(200))
    .catch((err) => console.log(err));
});
module.exports = route;
