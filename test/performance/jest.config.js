/**
 * Copyright 2020 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
process.env.JEST_PLAYWRIGHT_CONFIG = './test/performance/jest-playwright.config.js';

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  rootDir: '../..',
  roots: ['./test/performance', './src'],
  preset: 'jest-playwright-preset',
  testMatch: ['**/?(*.)+(spec|test).[t]s'],
  testTimeout: 200000,
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.json',
    },
  },
  setupFiles: ['./test/config/jest.retries.ts'],
  setupFilesAfterEnv: ['jest-extended/all', 'expect-playwright'],
};
