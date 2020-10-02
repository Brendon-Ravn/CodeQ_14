const db = require("../models");
// eslint-disable-next-line no-unused-vars
let siteCategory;
module.exports = function(app) {
  /*
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
*/
  /*
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
  */

  // Javascript page
  app.get("/javascript", (req, res) => {
    siteCategory = "js";
    db.Post.findAll({
      where: {
        category: "js"
      },
      include: db.User,
      order: [["id", "DESC"]]
    }).then(dbResponse => {
      const posts = JSON.parse(JSON.stringify(dbResponse));
      res.render("javascript", { posts });
    });
  });

  app.post("/javascript/api/posts", (req, res) => {
    console.log(req.body.question);
    db.Post.create({
      question: req.body.question,
      category: siteCategory
    }).then(result => {
      res.json(result);
    });
  });

  //css Page
  app.get("/css", (req, res) => {
    siteCategory = "css";
    db.Post.findAll({
      where: {
        category: "css"
      },
      include: db.User,
      order: [["id", "DESC"]]
    }).then(dbResponse => {
      const posts = JSON.parse(JSON.stringify(dbResponse));
      res.render("css", { posts });
    });
  });

  app.post("/css/api/posts", (req, res) => {
    console.log(req.body.question);
    db.Post.create({
      question: req.body.question,
      category: siteCategory
    }).then(result => {
      res.json(result);
    });
  });
};
