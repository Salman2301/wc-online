import svelte from "rollup-plugin-svelte";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import replace from 'rollup-plugin-replace';
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import sveltePreprocess from "svelte-preprocess";
import alias from "rollup-plugin-alias";
import path from "path";
import typescript from '@rollup/plugin-typescript';

const production = !process.env.ROLLUP_WATCH;

const preprocess = sveltePreprocess({
  sourceMap: !production,
  postcss: true
});

const envs = {
  // Todo Update the Production server URL
  "BACKEND_SERVER": process.env.BACKEND_SERVER || "http://localhost:1337"
}
function serve() {
  let server;

  function toExit() {
    if (server) server.kill(0);
  }

  return {
    writeBundle() {
      if (server) return;
      server = require("child_process").spawn(
        "npm",
        ["run", "start", "--", "--dev"],
        {
          stdio: ["ignore", "inherit", "inherit"],
          shell: true,
        }
      );

      process.on("SIGTERM", toExit);
      process.on("exit", toExit);
    },
  };
}

export default {
  input: "src/main.ts",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "public/build/bundle.js",
  },
  plugins: [
    replace({
      ...envs
    }),
    svelte({
      preprocess,
      dev: !production,
      emitCss: false,
			css: _=>_.write('bundle.css')
		}),
    alias({
      resolve: [".js", ".svelte", "/index.js"],
      entries: [{ find: "@", replacement: path.resolve(__dirname + "/src") }],
    }),
    // if rollup can't live reload after
    // css changed try uncommenting this postcss lines
    // postcss({
		// 	extract: 'public/utils.css'
    // }),

    // we'll extract any component CSS out into
    // a separate file - better for performance
    // css({ output: "bundle.css" }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: ["svelte"],
    }),
    commonjs(),
		typescript({
			sourceMap: !production,
			// inlineSources: !production
		}),

    // In dev mode, call `npm run start` once
    // the bundle has been generated
    !production && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload("public"),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  }
};
