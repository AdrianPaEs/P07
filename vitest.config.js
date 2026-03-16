"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("vitest/config");
exports.default = (0, config_1.defineConfig)({
    test: {
        // 1. Cambiamos 'src' por 'tests' para que busque en la carpeta correcta
        include: ["tests/**/*.{test,spec}.ts"],
        // 2. Mantenemos las exclusiones por seguridad
        exclude: ["**/node_modules/**", "**/dist/**"],
    },
});
