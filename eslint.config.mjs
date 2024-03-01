import tseslint from "typescript-eslint"
import prettier from "eslint-plugin-prettier/recommended"

export default tseslint.config(...tseslint.configs.recommended, prettier)
