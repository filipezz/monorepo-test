const { name } = require("./package.json");

module.exports = {
  displayName: name,
  name,
  preset: "ts-jest",
  coverageDirectory: "coverage",
  testEnvironment: "node",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
  roots: ["<rootDir>/src"],
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts",
    "!<rootDir>/src/main/**",
    "!<rootDir>/src/**/index.ts",
    "!<rootDir>/src/**/**/**-protocols.ts",
  ],
};
