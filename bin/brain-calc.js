#!/usr/bin/env node

import runEngine from '../src/index.js';
import generateRound from '../src/games/Calc/index.js';

runEngine('What is the result of the expression?', generateRound);
