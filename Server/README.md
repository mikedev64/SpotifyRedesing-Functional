# Server

API REST del proyecto Spotify Redesign, construida con Express.js y TypeScript.

## Características

### Gestión de Usuarios

- Foto de perfil
- Nombre de usuario
- URL personalizada

### Gestión de Cuentas

- Favoritos y Playlists
- Pins personalizados
- Configuración de interfaz
- Creación de cuenta
- Inicio/cierre de sesión
- Eliminación de cuenta

### Gestión de Artistas

- Canciones más escuchadas
- Discografía completa
- URL personalizada

### Gestión de Música

- Almacenamiento de contenido
- Streaming de audio
- Metadata de canciones

## Instalación

```bash
cd Server
pnpm install
```

## Scripts

```bash
# Desarrollo
pnpm dev

# Compilar
pnpm build

# Producción
pnpm start
```

## Estructura

```
Server/
├── src/
│   └── index.ts    # Punto de entrada
├── package.json
└── tsconfig.json
```

## API Endpoints

| Método | Ruta                 | Descripción       |
| ------ | -------------------- | ----------------- |
| GET    | `/api/users/:id`     | Obtener usuario   |
| GET    | `/api/artists/:id`   | Obtener artista   |
| GET    | `/api/music/:id`     | Stream de canción |
| POST   | `/api/auth/login`    | Iniciar sesión    |
| POST   | `/api/auth/register` | Crear cuenta      |

## Tecnologías

- **Express.js** - Framework web
- **TypeScript** - Tipado estático
- **Node.js** - Runtime
