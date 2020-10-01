const db = require("../models");

module.exports = function(app) {
  app.get("/api/posts/:category", (req, res) => {
    db.Post.findAll({
      where: {
        category: req.params.category
      },
      include: db.User
    }).then(dbPost => {
      console.log(dbPost);
      res.json(dbPost);
    });
  });

  app.get("/api/posts/:id", (req, res) => {
    db.Post.findOne({
      where: {
        id: req.params.id
      },
      include: db.User
    }).then(dbPost => {
      console.log(dbPost);
      res.json(dbPost);
    });
  });

  app.post("/api/posts", (req, res) => {
    db.Post.create(req.body).then(dbPost => {
      res.json(dbPost);
    });
  });
};
