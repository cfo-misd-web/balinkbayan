const express = require("express");
const path = require("path");
require("@babel/register")({
  extensions: [".ts", ".tsx", ".js", ".jsx"],
  presets: ["@babel/preset-typescript", "@babel/preset-react"],
});

const { render } = require("./src/entry-server");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from public
app.use(express.static(path.join(__dirname, "public")));

// SSR handler
app.get("*", (req, res) => {
  const appHtml = render(req.url);
  // Read index.html and inject the rendered app
  const fs = require("fs");
  const indexFile = path.join(__dirname, "index.html");
  fs.readFile(indexFile, "utf8", (err, html) => {
    if (err) {
      res.status(500).send("Error reading index.html");
      return;
    }
    const finalHtml = html.replace(
      '<div id="app"></div>',
      `<div id="app">${appHtml}</div>`
    );
    res.send(finalHtml);
  });
});

app.listen(PORT, () => {
  console.log(`SSR server running at http://localhost:${PORT}`);
});
