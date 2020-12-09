/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const { resolve, dirname } = require("path");

const root = resolve(dirname(""), ".");
const rootConfig = require(`${root}/jest.config.js`);
// eslint-disable-next-line no-undef
module.exports = {
    ...rootConfig,
    ...{
        rootDir: root,
        displayName: "unit-tests",
        setupFilesAfterEnv: ["<rootDir>/src/configurations/jest-setup.ts"],
    },
};
