#!/usr/bin/env node

import * as convert from './convert/index.js';

const program = convert.command;

const version = '1.0.8';
program.version(version).description('A command line tool for creating your projects');

program.parse(process.argv);
