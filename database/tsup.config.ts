import { defineConfig } from "tsup";

// const isProduction = process.env.NODE_ENV === "production";

export default defineConfig({
  clean: true,
  dts: true,
  minify: true,
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
});
