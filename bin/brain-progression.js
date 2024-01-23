#!/usr/bin/env node

import runEngine from '../src/index.js';
import generateRound from '../src/games/Progression/index.js';

runEngine('What number is missing in the progression?', generateRound);
