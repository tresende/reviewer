module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/pages/**/*.tsx',
    '!src/styles/**/*.ts',
    '!src/mocks/**/*.ts',
    '!src/models/**/*.ts',
    '!src/types/**/*.d.ts',
    '!src/config/**/*.ts',
    '!src/utils/**/*.ts',
    '!src/components/Head/index.tsx'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  moduleNameMapper: {
    '^styled-components': '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js'
  },
  coverageReporters: ['json-summary', 'text', 'lcov']
}
