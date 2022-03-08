import * as convert from './action.js';
import { Command } from 'commander';

export const command = new Command();

command
  .arguments('<source>')
  .option('-b,--brightness [number]', 'Control the brightness of the art, 0-1, defaults to .8')
  .option('-w,--width [number]', 'Control the width of the art, 0-1000, defaults to 75')
  .action(convert.action);
