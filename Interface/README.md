# Interface

Cliente web del proyecto Spotify Redesign, construido con Preact, Vite y Web Audio API.

## Características

### Páginas

| Página              | Descripción                         |
| ------------------- | ----------------------------------- |
| Inicio              | Feed principal con recomendaciones  |
| Búsqueda            | Explorar música, artistas y álbumes |
| Librería            | Colección personal del usuario      |
| Usuario             | Perfil público de usuarios          |
| Artista             | Página de artista con discografía   |
| Álbum               | Vista detallada de álbum            |
| Reproducción Actual | Vista expandida del reproductor     |
| Letras              | Letras sincronizadas                |
| Recomendaciones     | Sugerencias personalizadas          |
| Configuración       | Ajustes de la aplicación            |
| Perfil              | Configuración de cuenta             |

### Reproductor

- Reproducir / Pausar
- Cola de reproducción
- Modo "DJ" automático
- Letras minimizadas
- Guardar a Favoritos / Playlist
- Línea de tiempo interactiva
- Modo aleatorio
- Repetir (canción / playlist)

## Instalación

```bash
cd Interface
pnpm install
```

## Scripts

```bash
# Desarrollo
pnpm dev

# Compilar
pnpm build

# Vista previa de producción
pnpm preview
```

## Estructura

```
Interface/
├── public/
│   └── svg/icons/     # Iconografía
├── src/
│   ├── assets/        # Recursos estáticos
│   ├── components/    # Componentes reutilizables
│   ├── pages/         # Vistas de la aplicación
│   ├── index.tsx      # Punto de entrada
│   └── style.css      # Estilos globales
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## Tecnologías

- **Preact** - UI Library (alternativa ligera a React)
- **Vite** - Build tool y dev server
- **TypeScript** - Tipado estático
- **Web Audio API** - Reproducción de audio avanzada
