const express = require("express");
const mongoose = require('mongoose')
const articleRouter = require("./routes/articles");
const app = express();

mongoose.connect('mongodb://localhost/blog', {
  useNewURLParser: true

})

app.set("view engine", "ejs");

app.use("/articles", articleRouter);

app.get("/", (req, res) => {
  const articles = [
    {
      title: 'Test Article',
      createAt: new Date(),
      descripiton: "Test descripition",
    },
    {
        title: 'Test Article 2',
        createAt: new Date(),
        descripiton: "Test descripition 2",
      }
  ];

  res.render('articles/index', { articles: articles });
});

app.listen(5000);
