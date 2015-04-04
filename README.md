# musicxml-to-mp3 [![NPM version](http://img.shields.io/npm/v/musicxml-to-mp3.svg?style=flat-square)](https://www.npmjs.org/package/musicxml-to-mp3)

Convert MusicXML to MP3.

## Installation

Install the package with NPM:

```bash
$ npm install -g musicxml-to-mp3
```

The `-g` flag is recommended for easy CLI usage, but completely optional.

## Usage

Run it via the CLI:

```bash
$ musicxml-to-mp3 song.xml song.mp3
```

Or, programmatically interact with its API:

```javascript
var musicXmlToMp3 = require("musicxml-to-mp3");

var stream = musicXmlToMp3.convert("song.xml", "song.mp3");

stream.on("finish", function() { console.log("Done!"); });
```

## Related

This package is mostly just a thin wrapper around [musicxml-to-pcm](https://github.com/lukehorvat/musicxml-to-pcm) and [node-lame](https://github.com/TooTallNate/node-lame).

If MP3 simply isn't your thing, then perhaps try [musicxml-to-wav](https://github.com/lukehorvat/musicxml-to-wav) or [musicxml-to-speaker](https://github.com/lukehorvat/musicxml-to-speaker).
