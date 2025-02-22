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

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  rootDir: '../..',
  roots: ['./test/integration', './src'],
  testMatch: ['**/?(*.)+(spec|test).[t]s'],
  testEnvironment: 'jsdom', // mxgraph initialization needs to access to the window object
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.test.json',
    },
  },
  collectCoverageFrom: ['src/**/*.{ts,js}'],
  coveragePathIgnorePatterns: ['/src/model/'],
  coverageReporters: ['lcov', 'text-summary'],
  coverageDirectory: 'build/test-report/integration',
  setupFilesAfterEnv: [
    './test/integration/config/mxgraph-config.ts',
    // put at the latest place to see logs that could be displayed by setup files
    './test/integration/config/hide-console-warnings.js',
  ],
  reporters: [
    'default',
    [
      'jest-html-reporter',
      {
        pageTitle: 'bpmn-visualization Integration Test Report',
        outputPath: 'build/test-report/integration/index.html',
        includeFailureMsg: true,
        includeSuiteFailure: true,
      },
    ],
    [
      'jest-sonar',
      {
        outputDirectory: 'build/test-report/integration',
      },
    ],
  ],
};
