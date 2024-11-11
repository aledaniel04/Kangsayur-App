# Kangsayur App 
Kansagsayur-App es una aplicación web de tienda virtual desarrollada en React, que permite a los usuarios explorar y comprar productos como frutas, verduras, carnes, bebidas y lácteos de manera fácil y rápida. La aplicación integra Firebase para gestionar la autenticación, los datos de productos y las imágenes, ofreciendo una experiencia segura y en tiempo real. A continuación, se destacan sus principales funcionalidades:

Funcionalidades de Kansagsayur-App

1- Autenticación con Firebase:

Los usuarios pueden registrarse con su correo y contraseña para luego iniciar sesión utilizando este mismo metodo o directamente a través de Google, por último el usuario puede recuperar su contraseña, esto gracias a Firebase Authentication que asegura una gestión de usuarios confiable y segura. 

<img src="https://github.com/user-attachments/assets/275d22f3-ad53-44ed-bd1e-5b76ee47a959" alt="image" width="230"> <img src="https://github.com/user-attachments/assets/c088d959-c108-4dc1-8bc8-0707db767011" alt="image" width="230"> <img src="https://github.com/user-attachments/assets/24fef515-9c4a-4797-acac-224a227ff8d0" alt="image" width="230"> <img src="https://github.com/user-attachments/assets/139c3c57-e977-4c78-a306-20a7e5a437ad" alt="image" width="230">

2- Roles de Usuario:

Usuario Común: Al iniciar sesión, se le muestra una introducción explicativa sobre el funcionamiento de la aplicación.

![image](https://github.com/user-attachments/assets/18b1f0be-d16e-4556-8df6-171a32ac077f) ![image](https://github.com/user-attachments/assets/88def38b-a8eb-416a-a65d-4314eea5bec5)

Administrador: Tiene acceso directo a la página de productos y puede realizar todas las operaciones CRUD (crear, leer, actualizar y eliminar).

![image](https://github.com/user-attachments/assets/f228f1c5-d32e-4416-8e37-5e5dbacfe616) ![image](https://github.com/user-attachments/assets/753ec24b-15bd-459e-8b52-272901e35e8f)
 
3- Filtro de Productos por Categorías:

Los usuarios pueden filtrar los productos por categorías (verduras, frutas, carnes, etc.), visualizando solo los artículos correspondientes a cada categoría seleccionada, además pueden buscar productos por su nombre.

![image](https://github.com/user-attachments/assets/05c1a762-a51f-45a0-ab19-fea4b616053d) ![image](https://github.com/user-attachments/assets/8ff8f80b-ce1e-4dfc-9e2b-7b12358574c9) ![image](https://github.com/user-attachments/assets/cd18ad00-1349-4a0e-b96b-65f141c63c97)


4- Selección de Cantidad y Agregado al Carrito:

Al seleccionar un producto, el usuario puede acceder a un pop-up con la descripción completa y elegir la cantidad deseada. Al hacer clic en "Agregar al carrito", el producto se guarda en el carrito con la cantidad seleccionada, lo cual se refleja en el precio total y en la página del carrito.

![image](https://github.com/user-attachments/assets/563f2739-6cc3-4cb4-a139-727f0cea55ae)

5- Carrito de Compras Detallado:

En la página del carrito, los usuarios pueden ver todos los productos añadidos, junto con la cantidad, el precio actualizado y el total general de la compra.

![image](https://github.com/user-attachments/assets/58c4fe71-90e8-41da-bc00-7efe1c62bec0)

6- Gestión de Productos en Tiempo Real (solo para Admin):

El administrador puede agregar, editar y eliminar productos.
Los cambios se almacenan en Firebase Realtime Database, permitiendo que las actualizaciones ocurran instantáneamente para todos los usuarios conectados.
Firebase Storage se utiliza para guardar las imágenes de los productos, manteniendo una gestión eficiente y organizada de los recursos visuales.

![image](https://github.com/user-attachments/assets/5eb475fb-ee82-433b-827d-47c03a001719) ![image](https://github.com/user-attachments/assets/836a9f47-e30c-4c49-b17c-970b220613f2) ![image](https://github.com/user-attachments/assets/90e6e177-ce29-4de2-88c5-6c2537b2a12a)

## Tecnologías utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

![React](https://shields.io/badge/react-black?logo=react&style=for-the-badge)

![tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-grey?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC)


