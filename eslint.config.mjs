import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:tailwindcss/recommended",
  ),
  {
    settings: {
      tailwindcss: {
        callees: ["classnames", "cn", "cva"],
      },
    },
    rules: {
      "tailwindcss/no-custom-classname": ["warn", { whitelist: [] }],
      "no-console": ["warn", { allow: ["error"] }],
    },
  },
]

export default eslintConfig
