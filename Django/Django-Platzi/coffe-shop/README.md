# ☕ Coffee Shop

¡Bienvenido a **Coffee Shop**! Un sistema web moderno para la gestión y venta de productos de café, desarrollado con Django, Tailwind CSS y Django REST Framework.

---

## 🚀 Descripción
Coffee Shop es una plataforma web donde los usuarios pueden explorar, buscar y comprar productos de café. Incluye funcionalidades para la administración de productos, gestión de órdenes y autenticación de usuarios, todo con una interfaz atractiva y responsiva.

---

## ✨ Características principales
- **Catálogo de productos:** Visualiza, busca y filtra cafés disponibles, con imágenes y descripciones.
- **Carrito y órdenes:** Los usuarios pueden agregar productos a su orden y ver el detalle de sus compras.
- **Administración de productos:** Formulario amigable para crear y editar productos (nombre, precio, descripción, imagen, disponibilidad).
- **Autenticación de usuarios:** Registro, login y gestión de sesiones.
- **API REST:** Endpoints para consultar productos desde aplicaciones externas.
- **Estilos modernos:** Interfaz construida con Tailwind CSS y componentes responsivos.

---

## 🛠️ Tecnologías utilizadas
- [Django 5.2.1](https://www.djangoproject.com/)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [Tailwind CSS](https://tailwindcss.com/) (vía crispy-tailwind)
- [Pillow](https://python-pillow.org/) (gestión de imágenes)
- [psycopg2-binary](https://www.psycopg.org/) (soporte para PostgreSQL)
- [django-environ](https://django-environ.readthedocs.io/) (variables de entorno)

---

## 📦 Instalación

1. **Clona el repositorio:**
   ```bash
   git clone <url-del-repo>
   cd coffe-shop
   ```
2. **Crea y activa un entorno virtual:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # En Windows: venv\Scripts\activate
   ```
3. **Instala las dependencias:**
   ```bash
   pip install -r requirements.txt
   ```
4. **Aplica las migraciones:**
   ```bash
   python manage.py migrate
   ```
5. **Crea un superusuario (opcional, para administración):**
   ```bash
   python manage.py createsuperuser
   ```
6. **Ejecuta el servidor de desarrollo:**
   ```bash
   python manage.py runserver
   ```

---

## 🖥️ Uso
- Accede a la web en [http://localhost:8000/](http://localhost:8000/)
- Explora el catálogo de productos, inicia sesión y realiza órdenes.
- Accede al panel de administración en `/admin/` para gestionar productos y usuarios.

---

## 📁 Estructura del proyecto
- `coffe/`: App principal, modelos y vistas de productos.
- `orders/`: Gestión de órdenes y carrito de compras.
- `users/`: Autenticación y gestión de usuarios.
- `coffe_styles/`: Estilos y recursos estáticos (Tailwind CSS).
- `media/`: Imágenes subidas de productos.
- `config/`: Configuración global del proyecto.

---

## 🧪 Dependencias de desarrollo
- `ipython` (consola interactiva)
- `black` (formateador de código)

Instala con:
```bash
pip install -r requirements-dev.txt
```

---

## 🤝 Créditos
Desarrollado por Edwin Vega y colaboradores. Inspirado en la comunidad de Platzi.

---

## 📜 Licencia
Este proyecto está bajo la licencia MIT.
