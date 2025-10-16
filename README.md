# 🌿 Proyecto FITLIFE

**FITLIFE** es una aplicación web moderna desarrollada como parte de la **Unidad 3 del programa +Chicas TEC de UNICEF Perú**.  
Su propósito es inspirar y guiar a las personas hacia un estilo de vida saludable mediante rutinas, consejos y contenido motivacional.

---

## 💻 Tecnologías principales

- ⚛️ **React 19** — Librería principal para la interfaz.
- ⚡ **Vite** — Herramienta ultrarrápida para desarrollo y build.
- 🎨 **Tailwind CSS** — Framework de estilos utilitario.
- 🌐 **react-router-dom** — Enrutamiento interno (SPA).
- 🧩 **ESLint** — Control de calidad del código.
- 🗂️ **JSON local** — Fuente de datos dinámica para el contenido.

---

## 🚀 Scripts disponibles

Puedes ejecutar estos comandos en la raíz del proyecto:

| Comando | Descripción |
|----------|--------------|
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run build` | Genera el build optimizado para producción. |
| `npm run preview` | Sirve localmente el build de producción. |
| `npm run lint` | Analiza el código con ESLint. |

---

## 🛠️ Instalación y ejecución local

1. **Clona** este repositorio o descarga los archivos.
2. Abre una terminal en la carpeta raíz del proyecto.
3. Instala las dependencias:

```bash
npm install
```
4. Ejecuta el modo desarrollo:
```bash
npm run dev
```
5. Abre tu navegador en la URL que indique Vite (por defecto: `http://localhost:5173`).

Para probar el build de producción:

```bash
npm run build
npm run preview
```

---

## 📁 Estructura del proyecto

```
fitlife/
│
├── public/                # Archivos estáticos (imágenes, íconos, etc.)
├── src/
│   ├── assets/            # Recursos gráficos
│   ├── components/        # Componentes reutilizables (Header, Footer, Calculadora, etc.)
│   ├── pages/             # Páginas principales (Home, Catalog, About, Contact, etc.)
│   ├── data/              # Archivos JSON (catalogo, colaboradoras, testimonios)
│   ├── App.jsx            # Componente raíz y rutas
│   ├── main.jsx           # Punto de entrada de React
│   ├── App.css / index.css# Estilos globales
│   └── ...
│
├── package.json           # Scripts y dependencias
├── vite.config.js         # Configuración de Vite
└── README.md              # Documentación del proyecto
```

---

## 🧠 Sobre FITLIFE

**FITLIFE** combina diseño, motivación y bienestar.  
Incluye secciones de:

- ✨ **Portada animada** con modo claro/oscuro.
- 💪 **Planes de entrenamiento** interactivos.
- 🧮 **Calculadora de IMC**.
- 👩‍💻 **Testimonios y colaboradoras** inspiradoras.
- 🌱 **Misión y visión** con diseño adaptable.
- 📩 **Formulario de inscripción** para unirse a la comunidad.

Todo el contenido es dinámico y se carga desde archivos JSON locales, lo que facilita la personalización sin necesidad de modificar el código.

---

## ☁️ Despliegue

Puedes desplegar FITLIFE fácilmente en servicios como **Vercel** o **Netlify**.

### 🔹 Vercel
1. Conecta tu repositorio desde GitHub.
2. En configuración, usa estos valores:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
3. Guarda y despliega automáticamente.

### 🔹 Netlify
1. Importa tu repositorio desde GitHub.
2. Configura:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
3. Guarda y espera a que se construya la web.

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! 🙌  
Si deseas colaborar:

```bash
git checkout -b feat/mi-cambio
# realiza tus modificaciones
npm run lint
git commit -m "Descripción del cambio"
git push origin feat/mi-cambio
```
Luego abre un **Pull Request**.

---

## 📜 Licencia

Este proyecto está bajo licencia **MIT**.  
Eres libre de usar, modificar y compartir con atribución.

---

## 🪷 Créditos

Desarrollado por **Nicole Alexandra** - **Bianca Bereche** - **Luisa Payano** - **Vanesa Chipana** 💚  
Proyecto académico para **+Chicas TEC - UNICEF Perú**  

---

> “Cuidar tu cuerpo es amar tu vida. FITLIFE: bienestar, motivación y energía.” 🌿

