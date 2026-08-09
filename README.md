# Proyecto Aula 0.8

Versión de arquitectura modular preparada para funcionar directamente en GitHub Pages.

## Qué cambia respecto a 0.7
- No requiere compilación ni Vite para publicarse.
- GitHub Pages puede seguir usando `main` + `/(root)`.
- La aplicación está separada en módulos, no en un HTML monolítico.
- `src/data/` contiene el contenido/currículo.
- `src/ui/` contiene el motor reutilizable de actividades.
- `src/styles/` contiene el diseño estable.
- `src/app.js` gestiona navegación y vistas.
- La zona de profesora ya existe como capa independiente de la vista del alumno.

## Estructura
```
index.html
src/
  app.js
  data/
    catalog.js
    course6G.js
  ui/
    activityEngine.js
  styles/
    app.css
```

## GitHub Pages
Mantener:
- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/(root)`

## Prioridad
6G y 7G. En 0.8, 6G Primer Semestre A funciona como bloque modelo y 7G queda ya conectado a la misma arquitectura.
