#!/usr/bin/env node

import runEngine from '../src/index.js';
import generateRound from '../src/games/Gcd/index.js';

runEngine('Find the greatest common divisor of given numbers.', generateRound);
