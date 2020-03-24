import config from "sapper/config/rollup.js";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import svelte from "rollup-plugin-svelte";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import onwarn from "./onwarn";
import { mode, dev, legacy } from "./env";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: config.client.input(),
  output: config.client.output(),
  plugins: [
    replace({
      "process.browser": "true",
      "process.env.NODE_ENV": JSON.stringify(mode)
    }),
    svelte({
      dev,
      hydratable: true,
      emitCss: true
    }),
    resolve({
      browser: true,
      dedupe: ["svelte"]
    }),
    commonjs(),

    legacy &&
      babel({
        extensions: [".js", ".mjs", ".html", ".svelte"],
        runtimeHelpers: true,
        exclude: ["node_modules/@babel/**"],
        presets: [
          [
            "@babel/preset-env",
            {
              targets: "> 0.25%, not dead"
            }
          ]
        ],
        plugins: [
          "@babel/plugin-syntax-dynamic-import",
          [
            "@babel/plugin-transform-runtime",
            {
              useESModules: true
            }
          ]
        ]
      }),

    !dev &&
      terser({
        module: true
      })
  ],

  onwarn
};
