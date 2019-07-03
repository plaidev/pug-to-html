#!/usr/bin/env node

"use strict";

const path = require("path");
const fs = require("fs");
const chalk = require("chalk");
const VueEngine = require("./engines/vue");
const PugEngine = require("./engines/pug");
const JadeEngine = require("./engines/pug");

const args = process.argv;
const fileName = args[args.length - 1];
const filePath = path.join(process.cwd(), fileName);
let engine;

const _throwAndExit = msg => {
  console.log(chalk.red(msg));
  process.exit(1);
};

if (!fs.existsSync(filePath)) _throwAndExit(`${fileName} was not found`);

if (filePath.includes(".vue")) engine = VueEngine(filePath);
else if (filePath.includes(".pug")) engine = PugEngine(filePath);
else if (filePath.includes(".jade")) engine = JadeEngine(filePath);
else _throwAndExit(`${fileName} was not found`);

if (engine.name === "vue" && !engine.hasSupportedVueTemplate())
  _throwAndExit(`${fileName} does not have a pug template`);
const compiledResult = engine.convertTemplate();
console.log(chalk.green(compiledResult));
engine.saveToFile(compiledResult);
process.exit(0);
