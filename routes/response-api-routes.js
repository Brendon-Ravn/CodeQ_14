const db = require("../models");

module.exports = function(app) {
  app.get("/api/response", (req, res) => {
    const query = {};
    if (req.query.post_id) {
      query.PostId = req.query.post_id;
    }
    db.Response.findAll({
      where: query,
      include: db.Post
    }).then(dbResponse => {
      res.json(dbResponse);
    });
  });

  app.get("/api/response/:id", (req, res) => {
    db.Response.findOne({
      where: {
        id: req.params.id
      },
      include: db.Post
    }).then(dbResponse => {
      console.log(dbResponse);
      res.json(dbResponse);
    });
  });

  app.post("/api/response", (req, res) => {
    db.Response.create(req.body).then(dbResponse => {
      res.json(dbResponse);
    });
  });
};
