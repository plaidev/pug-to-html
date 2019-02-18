"use strict";

const pug = require("pug");
const fs = require("fs");

module.exports = function(filePath) {
  const contents = fs.readFileSync(filePath, "utf-8");
  let html = "";

  return {
    name: "pug",

    convertTemplate() {
      console.log(filePath, contents);
      html = pug.render(contents, { pretty: true });
      return html;
    },

    saveToFile() {
      fs.writeFileSync(filePath.replace(".pug", ".html"), html);
    },
  };
};
