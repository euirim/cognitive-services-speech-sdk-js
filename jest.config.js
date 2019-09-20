// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
module.exports = {
    transform: {
        "^.+\\.ts$": "ts-jest",
    },
    testRegex: "tests/.*Tests\\.ts$",
    testPathIgnorePatterns: ["/lib/", "/es2015/", "/node_modules/", "/src/"],
    moduleFileExtensions: ["ts", "js", "jsx", "json", "node"],
    collectCoverage: true,
    "reporters": ["default", "jest-junit"],
    setupFilesAfterEnv: ["./secrets/TestConfiguration.ts"]
};
