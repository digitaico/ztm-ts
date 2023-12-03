import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  collectCoverage: true,
  testEnvironment: 'node',
  coverageReporters: ['json', 'html'],
  coverageDirectory: './coverage',
};

export default config;
