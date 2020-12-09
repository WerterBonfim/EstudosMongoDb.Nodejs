/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const { resolve, dirname } = require("path");

const root = resolve(dirname(""));

module.exports = {
    rootDir: root,
    displayName: "root-tests",
    testMatch: ["<rootDir>/src/**/*.test.ts"],
    testEnvironment: "node",
    clearMocks: true,
    preset: "ts-jest",
    moduleNameMapper: {
        "@src/(.*)": "<rootDir>/src/$1",
        "@test/(.*)": "<rootDir>/test/$1",
    },
};
