const db = require("../models");
const Client = db.client;

exports.create = (req, res) => {
  Client.create(req.body, (err, data) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.status(200).send(data);
  });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Client.updateOne({ _id: id }, req.body, (err, data) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.status(200).send(data);
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Client.deleteOne({ _id: id }, (err, data) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    res.status(200).send(data);
  });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Client.findById(id, (err, data) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.status(200).send(data);
  });
};

exports.findAll = (_req, res) => {
  Client.paginate()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      res.status(500).send({ message: error });
    });
};
