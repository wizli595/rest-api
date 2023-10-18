// import mongo
const mongoose = require("mongoose");
// create schema with names and types (mongo types)
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: mongoose.SchemaTypes.String,
      required: true,
      unique: true,
    },
    email: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    age: { type: mongoose.SchemaTypes.Number, required: true },
    createdAt: {
      type: mongoose.SchemaTypes.Date,
      required: true,
      default: new Date(),
    },
  },
  { versionKey: false }
);
// create user model
const userModel = mongoose.model("user", UserSchema);
module.exports = userModel;
