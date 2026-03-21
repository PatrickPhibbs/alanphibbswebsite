import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '\\.css$': '<rootDir>/__mocks__/styleMock.js',
    '^yet-another-react-lightbox$': '<rootDir>/__mocks__/lightboxMock.tsx',
    '^yet-another-react-lightbox/styles.css$': '<rootDir>/__mocks__/styleMock.js',
  },
};

export default createJestConfig(config);
