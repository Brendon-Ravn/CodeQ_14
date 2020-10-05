const db = require("../models");
// eslint-disable-next-line no-unused-vars
let siteCategory;
module.exports = function(app) {
  // Javascript page
  app.get("/javascript", (req, res) => {
    siteCategory = "js";
    db.Post.findAll({
      where: {
        category: "js"
      },
      include: [db.User, db.Response],
      order: [["id", "DESC"]]
    }).then(dbResponse => {
      const posts = JSON.parse(JSON.stringify(dbResponse));
      console.log(posts);
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

  app.post("/javascript/api/responses/:id", (req, res) => {
    console.log("id: ", req.params.id);
    db.Response.create({
      PostId: parseInt(req.params.id),
      answer: req.body.answer,
      category: "js"
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
      include: [db.User, db.Response],
      order: [["id", "DESC"]]
    }).then(dbResponse => {
      const posts = JSON.parse(JSON.stringify(dbResponse));
      console.log(posts);
      res.render("javascript", { posts });
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

  app.post("/css/api/responses/:id", (req, res) => {
    console.log("id: ", req.params.id);
    db.Response.create({
      PostId: parseInt(req.params.id),
      answer: req.body.answer,
      category: "css"
    }).then(result => {
      res.json(result);
    });
  });

  //html Page
  app.get("/html", (req, res) => {
    siteCategory = "html";
    db.Post.findAll({
      where: {
        category: "html"
      },
      include: [db.User, db.Response],
      order: [["id", "DESC"]]
    }).then(dbResponse => {
      const posts = JSON.parse(JSON.stringify(dbResponse));
      console.log(posts);
      res.render("html", { posts });
    });
  });

  app.post("/html/api/posts", (req, res) => {
    console.log(req.body.question);
    db.Post.create({
      question: req.body.question,
      category: siteCategory
    }).then(result => {
      res.json(result);
    });
  });

  app.post("/html/api/responses/:id", (req, res) => {
    console.log("id: ", req.params.id);
    db.Response.create({
      PostId: parseInt(req.params.id),
      answer: req.body.answer,
      category: "css"
    }).then(result => {
      res.json(result);
    });
  });
};
