"use strict";

var fs = require("fs");
var lame = require("lame");
var musicXmlToPcm = require("musicxml-to-pcm");

module.exports.convert = function(srcFile, destFile) {
  var bitsPerSample = 16; // A 16-bit integer will represent each sample.
  var samplesPerSecond = 44100;

  return musicXmlToPcm
  .newStream(fs.readFileSync(srcFile, "utf8"), bitsPerSample, samplesPerSecond)
  .pipe(new lame.Encoder({ channels: 1, bitDepth: bitsPerSample, sampleRate: samplesPerSecond }))
  .pipe(fs.createWriteStream(destFile));
};
