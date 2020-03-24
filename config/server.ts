import config from "sapper/config/rollup.js";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import svelte from "rollup-plugin-svelte";
import onwarn from "./onwarn";
import pkg from "../package.json";
import { mode, dev } from "./env";

export default {
  input: config.server.input(),
  output: config.server.output(),
  plugins: [
    replace({
      "process.browser": "false",
      "process.env.NODE_ENV": JSON.stringify(mode)
    }),
    svelte({
      generate: "ssr",
      dev
    }),
    resolve({
      dedupe: ["svelte"]
    }),
    commonjs()
  ],
  external: Object.keys(pkg.dependencies).concat(
    require("module").builtinModules ||
      Object.keys((process as any).binding("natives"))
  ),

  onwarn
};
