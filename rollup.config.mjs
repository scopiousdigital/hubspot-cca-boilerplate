import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import { babel } from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";

import glob from "glob";

const inputFiles = glob.sync("src/actions/**/index.ts");

export default inputFiles.map((inputFile) => ({
  input: inputFile,
  output: {
    file: `dist/${inputFile.split("/")[2]}.js`,
    format: "cjs",
  },
  external: [
    "@hubspot/api-client",
    "axios",
    "async",
    "aws-sdk",
    "lodash",
    "mongoose",
    "mysql",
    "redis",
    "request",
    "bluebird",
    "random-number-cspring",
    "googleapis",
  ],
  plugins: [nodeResolve(), commonjs(), json(), typescript(), babel({ babelHelpers: "bundled" }), terser()],
}));
