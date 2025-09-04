## 🚀 Portfolio App

Aplicación fullstack para gestionar y mostrar proyectos de un portfolio.  
Incluye arquitectura basada en principios **SOLID** y **Clean Architecture**, con separación de responsabilidades clara.

---

## 📖 Tabla de Contenidos
- [Descripción](#-descripción)
- [ScriptsDisponibles](#-scriptsDisponibles)
- [Tecnologías](#-tecnologías)
- [Arquitectura](#-arquitectura)
  - [Estructura de carpetas](#estructura-de-carpetas)
  - [Explicación de carpetas](#explicación-de-carpetas)
- [Instalación](#-instalación)
- [Scripts disponibles](#-scripts-disponibles)
- [Prácticas aplicadas](#-prácticas-aplicadas)

---

# 📌 Descripción
Este proyecto es un **portfolio personal** donde se pueden:
- Mostrar proyectos con sus imágenes y descripciones.
- Crear, editar y eliminar proyectos desde el backend.
- Manejar el estado global con **Redux Toolkit + Thunks** para sincronizar UI ↔ API.


# 📜 Scripts disponibles

- npm run dev → Modo desarrollo
- npm run build → Compilar proyecto
- npm run start → Servir en producción
- npm run lint → Revisar errores de linting

# Correr en desarrollo

1. Clonar el repositorio.
2. Crear el ```.env``` en base al archivo ```env.ts```.

# Levantar el backend
3. Instalar las dependencias con ``` npm install ```.
4. Correr las migraciones de Prisma ``` npx prisma migrate dev ```
5. Correr el comando ``` npx prisma generate ``` que actualiza el cliente de Prisma (@prisma/client) y genera los enums como tipos TypeScript que podés importar.
6. Ejecutar seed ``` npm run seed ``` (cargar el seed de prueba a la base de datos).
7. Levantar el back, en la carpeta api. ```npm run dev``` para levantarlo con nodemon.
8. Accedé a ```http://localhost:3001/api-docs``` para ver la documentación de la API generada con Swagger.

# Levantar el frontend
3. Instalar las dependencias con ``` npm install ```.
2. Levantar el back, en la carpeta api. ```npm run dev``` para levantarlo con nodemon.




## 🛠 Tecnologías
**Frontend**
- [Next.js](https://nextjs.org/) (React Framework)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/) o [Styled Components](https://styled-components.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/) con Thunks para side effects

**Backend**
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- TypeScript
- PostgreSQL
- Swagger para documentación
- Nodemon para desarrollo
- Zod (para validaciones)
- Morgan (logger)
- CORS
- cookie-parser
- Body-parser
- ts-node
- Arquitectura **Database → Service → Controller**

**Infraestructura**
- [Axios](https://axios-http.com/) (Http Client)
- [Cloudinary](https://cloudinary.com/) para imágenes
- [Prisma](https://www.prisma.io/) con PostgreSQL (opcional)



# ☁️ Deploy
- **Railway** para backend
- **Vercel** para frontend


-
----------------------------------------------------------------------------------------------------------------

## BACKEND

# 🔌 Endpoints
- `GET /api/projects` → lista de proyectos
- `GET /api/feedback?projectId=p1` → feedbacks
- `POST /api/feedback` → { projectId, name?, message }
- `GET /api/stats` → { visits, apiCalls, likes }
- `POST /api/stats/visit` → incrementa visitas
- `POST /api/chat` → { message } → { reply }


# 🧠 IA
Usa Gemini con un prompt que te representa.


# 🌐 CORS
Configurable con `CORS_ORIGIN` para permitir tu frontend en Next.js.


----------------------------------------------------------------------------------------------------------------
## FRONTEND
El proyecto aplica **Clean Architecture** y **Domain Driven Design (DDD)**.  
Esto asegura que el código sea modular, escalable y fácil de mantener.

### Estructura de carpetas
```bash
src/
 ├── app/                # Páginas y rutas Next.js
 ├── components/         # Componentes UI reutilizables
 ├── features/           # Redux slices y thunks
 ├── domain/             # Core de negocio
 │   ├── entities/       # Entidades de negocio (ej: Project.ts)
 │   ├── repositories/   # Interfaces de repositorios (ej: ProjectRepository.ts)
 │   └── services/       # Reglas de negocio sobre entidades. Ejemplo: ProjectService valida que un proyecto tenga nombre antes de guardarlo.
 │   └── value-objects/  # Objetos inmutables que representan conceptos del dominio que tienen reglas propias. Garantizan que los datos sean     
 │                       # válidos y consistentes en toda la aplicación. Ej. En ProjectId nunca vas a tener un ID inválido.
 ├── infrastructure/     # Implementaciones técnicas
 │   └── repositories/   # Repositorios concretos (ej: HttpProjectRepository.ts)
 ├── lib/                # Utilidades (ej: httpClient.ts con Axios)
 └── styles/             # Estilos globales
```


🧩 Prácticas aplicadas

- SOLID principles (responsabilidad única, inversión de dependencias, etc.)
- Clean Architecture (separación de capas: dominio, infraestructura, aplicación)
- Domain Driven Design (DDD) para organizar entidades y repositorios
- Redux Toolkit + Thunks para estado global y side effects
- Resiliencia: repositorios desacoplados permiten cambiar de REST → GraphQL → Mock sin modificar UI


#  Flujo

UI React
   |
   v
Redux Thunk
   |
   v
  Service
(ProjectService)  <- aquí se aplican reglas de negocio
   |
   v
HttpProjectRepository 
   |
   v
httpClient <- aquí se hace el fetch a la API
   |
   v
API / Base de Datos