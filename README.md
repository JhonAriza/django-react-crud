
 #Django-React CRUD
 
🛠️ Introducción
Este es un API basado en Django y React para la gestión de users  Permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre estas entidades.

🚀 Instalación
Clonar el repositorio:
git clone  https://github.com/JhonAriza/django-react-crud.git

- Acceder al directorio del proyecto:
cd django-react-crud

- Crear y activar un entorno virtual:
python -m venv venv
venv\Scripts\activate      # En Windows

- Instalar las dependencias del proyecto:
pip install -r requirements.txt

- Crear la base de datos para el proyecto.

- Ejecutar las migraciones para crear las tablas de la base de datos:
python manage.py migrate

💻 Ejecución del Proyecto
-Iniciar el servidor de desarrollo de Django:
python manage.py runserver
El servidor se levantará en:  http://localhost:5173/.

- Iniciar el frontend de React (Vite):
cd client
npm install
npm run dev
