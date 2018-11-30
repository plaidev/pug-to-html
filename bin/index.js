#!/usr/bin/env node

"use strict";

const path = require("path");
const fs = require("fs");
const chalk = require("chalk");
const Engine = require("./engine");

const args = process.argv;
const fileName = args[args.length - 1];
const filePath = path.join(process.cwd(), fileName);

const _throwAndExit = msg => {
  console.log(chalk.red(msg));
  process.exit();
};

if (!fs.existsSync(filePath)) _throwAndExit(`${fileName} was not found`);
if (!filePath.includes(".vue")) _throwAndExit(`${fileName} was not found`);

const engine = Engine(filePath);

if (!engine.hasPugTemplate()) _throwAndExit(`${fileName} does not have a pug template`);
console.log(chalk.green(engine.convertTemplate()));
engine.saveToFile();
process.exit();
