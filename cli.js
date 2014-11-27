#!/usr/bin/env node

"use strict";

var musicXmlToMp3 = require("./");
var pkg = require("./package.json");
var args = process.argv.slice(2);
var xmlFile = args[0];
var mp3File = args[1];

if (args.indexOf("--help") !== -1 || !xmlFile || !mp3File) {
  console.log([
    "",
    pkg.name + " - " + pkg.description,
    "",
    "Usage:",
    "",
    "  " + pkg.name + " <xml> <mp3>"
  ].join("\n"));
  return;
}

if (args.indexOf("--version") !== -1) {
  console.log(pkg.version);
  return;
}

musicXmlToMp3.convert(xmlFile, mp3File).on("finish", function() {
  console.log("Successfully converted " + xmlFile + " to " + mp3File + "!");
});
