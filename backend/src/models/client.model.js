const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const schema = new mongoose.Schema({
  logo: String,
  name: String,
  industry: String,
  email: String,
  phone: Number,
  description: String,
  signed: Boolean,
  invoices: Array,
});

schema.plugin(mongoosePaginate);

const Client = mongoose.model(
  "Client",
  schema
);

module.exports = Client;