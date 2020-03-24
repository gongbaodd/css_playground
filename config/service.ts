import config from "sapper/config/rollup.js";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import onwarn from "./onwarn";
import { mode, dev } from "./env";

export default {
  input: config.serviceworker.input(),
  output: config.serviceworker.output(),
  plugins: [
    resolve(),
    replace({
      "process.browser": "true",
      "process.env.NODE_ENV": JSON.stringify(mode),
    }),
    commonjs(),
    !dev && terser(),
  ],

  onwarn,
};
