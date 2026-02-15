# Ejemplo de Archivo "tsconfig.json"

```json
{
  // Visit https://aka.ms/tsconfig to read more about this file
  "compilerOptions": {
    // File Layout
    "rootDir": "./src",
    "outDir": "./dist",

    // Environment Settings
    // See also https://aka.ms/tsconfig/module
    "module": "commonjs",
    "target": "es2020",

    // For nodejs:
    // "lib": ["esnext"],
    "types": ["node"],
    // and npm install -D @types/node
    "esModuleInterop": true,

    // Other Outputs
    // "sourceMap": true,
    // "declaration": true,
    // "declarationMap": true,

    // Stricter Typechecking Options
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,

    // Style Options
    // "noImplicitReturns": true,
    // "noImplicitOverride": true,
    // "noUnusedLocals": true,
    // "noUnusedParameters": true,
    // "noFallthroughCasesInSwitch": true,
    // "noPropertyAccessFromIndexSignature": true,

    // Recommended Options
    "strict": true,
    // "jsx": "react-jsx",
    // "verbatimModuleSyntax": true,
    // "isolatedModules": true,
    // "noUncheckedSideEffectImports": true,
    // "moduleDetection": "force",
    "skipLibCheck": true,
    "noImplicitAny": true,
    "forceConsistentCasingInFileNames": true,

    // Extras
    "removeComments": true
  },
  "include": ["./src/**/*.ts"],
  "exclude": ["node_modules", "dist"]
}
```

## Opciones de configuración

### ▶️ 1. File Layout / Entrada y salida

- `rootDir`: indica la carpeta donde está tu código fuente (`.ts`). TypeScript solo compilará archivos dentro de esta carpeta.
- `outDir`: indica dónde se generarán los archivos compilados (`.js`). En tu caso, todos irán a `./dist`.

### ▶️ 2. Environment Settings / Compilación

- `module: "CommonJS"`: tu código se compila usando **CommonJS**, que es el sistema de módulos de Node.js (el clásico `require`/`module.exports`).
- `target: "ES2020"`: la versión de JavaScript a la que TypeScript convertirá tu código. Por ejemplo, funciones `async/await` están disponibles.
- `moduleResolution: "node"`: le dice a TypeScript cómo buscar módulos importados. `"node"` sigue la forma de Node.js (busca en `node_modules`, etc).

### ▶️ 3. For nodejs / Node.js typings

- `types: ["node"]`: le dice a TypeScript que incluya los tipos de Node.js (como `fs`, `path`, `process`).
- `esModuleInterop: true`: permite que puedas hacer `import fs from "fs"` en lugar de `import * as fs from "fs"`. Mejora la compatibilidad entre CommonJS y ESModules.

### ▶️ 4. Debugging

- Para depurar con breakpoints en Node/VSCode

### ▶️ 5. Recommended Options / Recomendados

- `strict: true`: activa todas las opciones estrictas de TypeScript (como `noImplicitAny`, `strictNullChecks`, etc). Es la forma más segura de programar.
- `skipLibCheck: true`: omite la verificación de tipos en archivos de declaración `.d.ts` de librerías externas. Acelera la compilación y evita errores de librerías.
- `forceConsistentCasingInFileNames: true`: obliga a usar el mismo **case** en los imports que en los nombres de archivo. Evita problemas entre Windows y Linux/Mac.

### ▶️ 6. Extras / Extras útiles

- `noImplicitAny: true`: TypeScript te obligará a declarar tipos explícitos en lugar de inferir `any` automáticamente. Previene errores silenciosos.
- `removeComments: true`: elimina los comentarios del JavaScript compilado (`.js`) para que el resultado sea más limpio.

### ▶️ 7. Include & Exclude

- `include`: indica qué archivos TypeScript debe compilar. `"./src/**/*.ts"` significa **todos los `.ts` dentro de `src` y sus subcarpetas**.
- `exclude`: carpetas que **no se compilan**, como `node_modules` y `dist` (para evitar ciclos o recompilaciones innecesarias).

### ▶️ 8. En Terminal Integrada instalamos los tipos de Node JS:

```bash
npm install -D @types/node
```

[Volver a Inicio](../../README.md)