module.exports = {
  roots: ['src/__test__/', 'src/components/', 'src/pages/'],
  setupFilesAfterEnv: ['./src/__test__/setup.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/']
};
