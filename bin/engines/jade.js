"use strict";

const jade = require("jade");
const fs = require("fs");

module.exports = function(filePath) {
  const contents = fs.readFileSync(filePath, "utf-8");

  return {
    name: "jade",

    convertTemplate() {
      console.log(filePath, contents);
      return jade.render(contents, {
        doctype: "html",
        pretty: true
      });
    },

    saveToFile(html) {
      fs.writeFileSync(filePath.replace(".jade", ".html"), html);
    },
  };
};
