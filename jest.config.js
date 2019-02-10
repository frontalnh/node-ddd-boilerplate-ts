module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@domain/(.*)$': '<rootDir>/src/server/domain/$1',
    '^@common/(.*)$': '<rootDir>/src/server/common/$1',
    '^@utils/(.*)$': '<rootDir>/src/server/utils/$1',
    '^@infra/(.*)$': '<rootDir>/src/server/infra/$1',
    '^@api/(.*)$': '<rootDir>/src/server/api/$1',
    '^@interfaces/(.*)$': '<rootDir>/src/server/interfaces/$1',
    '^@root/(.*)$': '<rootDir>/src/server/$1'
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testMatch: ['**/*.test.+(ts|tsx|js)']
};
