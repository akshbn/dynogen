#!/usr/bin/env node

require = require('esm')(module);
require('../src/main.js').main(process.argv);