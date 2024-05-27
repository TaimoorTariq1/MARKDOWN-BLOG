const express = require("express");
const articleRouter = require("./routes/articles");
const app = express();

app.set("view engine", "ejs");

app.use("/articles", articleRouter);

app.get("/", (req, res) => {
  const articles = [
    {
      title: "Test Article",
      createAt: Date.now(),
      descripiton: "Test descripition",
    },
    {
        title: "Test Article 2",
        createAt: Date.now(),
        descripiton: "Test descripition 2",
      }
  ];

  res.render("index", { articles: articles });
});

app.listen(5000);
