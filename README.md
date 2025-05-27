# Practicas_Web_I_1-2025

## Instrucciones para clonar el repositorio

1. Abre una terminal o consola de comandos.
2. Navega a la carpeta donde deseas clonar el repositorio.
3. Ejecuta el siguiente comando:

    ```bash
    git clone https://github.com/leaox77/Proyecto_Web_II_1-2025.git
    ```

4. Ingresa al directorio del repositorio clonado:

    ```bash
    cd Proyecto_Web_II_1-2025
    ```

## Instruccione spara crearse una nueva rama

1. Asegúrate de estar en el directorio del repositorio.
2. Actualiza la información del repositorio remoto:

    ```bash
    git pull origin main
    ```

3. Crea una nueva rama y cámbiate a ella (reemplaza `nombre-de-tu-rama` por el siguiente formato 'ApellidoP_ApellidoM_Nombres'):

    ```bash
    git checkout -b nombre-de-tu-rama
    ```

4. Verifica que estás en la nueva rama:

    ```bash
    git branch
    ```

5. Actualiza desde main antes de hacer tus cambios

    ```bash
    git pull origin main
    ```

## Instrucciones para subir tus cambios (solo a tu rama)

1. Asegúrate de haber guardado y agregado tus archivos modificados:

    ```bash
    git add .
    ```

2. Realiza un commit con un mensaje descriptivo:

    ```bash
    git commit -m "Descripción de los cambios realizados"
    ```

3. Sube tus cambios a tu rama en el repositorio remoto:

    ```bash
    git push origin nombre-de-tu-rama
    ```

4. Verifica en GitHub que tus cambios se hayan subido correctamente.

### 📝 Tarea: Crear Página de Registro

## 🎯 Objetivo

Desarrollar una página de **registro de usuario** que cumpla con los siguientes requerimientos:

---

## 📌 Requisitos

1. **Formulario de Registro**:
   - Campos mínimos: nombre de usuario, contraseña y nombre completo.
   - Validaciones básicas (no enviar campos vacíos).

2. **Almacenamiento Local**:
   - Los datos del nuevo usuario deben guardarse en el `localStorage`.
   - Verifica si el usuario ya existe (por nombre de usuario) antes de guardarlo.

3. **Estilos y Diseño**:
   - Crear y utilizar una **paleta de colores personalizada**.
   - Definir al menos **5 colores** distintos (sin incluir los colores de éxito o error).
   - Puedes usar [Coolors.co](https://coolors.co) u otra herramienta similar para generar tu paleta.

4. **Formato y estructura recomendada**:
   - Componente `Register.jsx` (o similar) que contenga el formulario.
   - Guarda la paleta como PDF o IMG, guardando lso codigos de los colores. (Implementaremos la siguiente clase)

---

## 🎨 Ejemplo de Paleta de Colores

> *Este es solo un ejemplo. Puedes definir la tuya propia.*

```js
// ejemplo en JS
const colors = {
  primary: "#264653",
  secondary: "#2a9d8f",
  accent: "#e9c46a",
  highlight: "#f4a261",
  background: "#fefae0",
};
```

---

## ✅ Entregable

- Código funcional de la página `Register`.
- Uso de `localStorage` para guardar usuarios.
- Archivo o sección con la paleta de colores bien definida.

---

## ⏰ Fecha de entrega

> Miercoles, 28 de Mayo, 2025. Horas 23:59.

