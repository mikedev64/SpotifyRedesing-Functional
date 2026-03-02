# Spotify Functional Redesign

Rediseño funcional de Spotify basado en el concepto propuesto por [Juxtopossed](https://www.youtube.com/@juxtopposed). Este proyecto busca hacer realidad esa visión con una implementación completamente funcional.

## Descripción

Este monorepo contiene una reimplementación del cliente de Spotify con un diseño mejorado y características modernas. El proyecto está dividido en dos partes principales:

- **Interface/** - Cliente web construido con Preact y Web Audio API
- **Server/** - API REST construida con Express.js

## Tecnologías

| Componente   | Stack                                   |
| ------------ | --------------------------------------- |
| Frontend     | Preact, TypeScript, Vite, Web Audio API |
| Backend      | Express.js, TypeScript, Node.js         |
| Herramientas | ESLint, pnpm workspaces                 |

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/SpotifyClon.git

# Instalar dependencias
pnpm install

# Iniciar en modo desarrollo
pnpm dev
```

## Estructura del Proyecto

```
SpotifyClon/
├── Interface/     # Cliente web (Preact + Vite)
├── Server/        # API REST (Express.js)
├── package.json   # Configuración del monorepo
└── tsconfig.json  # Configuración base de TypeScript
```

## Créditos

- Diseño original: [Juxtopossed](https://www.youtube.com/@juxtopposed)
- Implementación: Contribuidores del proyecto

## Licencia

MIT
