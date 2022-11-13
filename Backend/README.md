# Cómo poner en funcionamiento el proyecto

Este frontend consume la API realizada con Spring Boot de Backend/tienda. Para ponerla en funcionamiento:

## Backend y Base de datos
1. Es necesario que cuente con el JDK 18 de JAVA y MYSQL.
2. Crear en mysql una base de datos con el nombre green_buddies.
3. Si fuera necesario: cambiar el puerto, el nombre de usuario y la contraseña de su mysql local desde Backend\tienda\src\main\resources\application.properties.  
4. Ejecutar en su IDE de preferencia (que utilice maven, v.gr. IntelliJ) Backend\tienda\src\main\java\StoreApplication.java.
5. Ejecutar el script Especificaciones\script-bd.sql que cargará en la base de datos nuestros productos, usuarios, etc.  

## Frontend

1. Para instalar el frontend de GreenBuddies hay que tener [Angular CLI](https://github.com/angular/angular-cli) version 14.0.2 o superior, NODE y NPM.
2. Dentro de Frontend/GreenBuddies instalar las dependencias a través de npm install.  
3. Inicializar el proyecto con npm start o ng serve.

-----------------------------------------------

### Usuarios

Puede registrar un usuario nuevo -no administrador- perfectamente, y utilizarlo en el resto de su sesión.

También puede probar la app con alguno de los usuarios que tenemos precargados:

*Con rol Administrador, para crud y ver reportes del negocio*

Email:   greenbuddies@gmail.com  
Contraseña:   GreenBuddiesAdmin

*Con rol de cliente*

Email:   cerati@gus.com  
Contraseña:   siempreesHOY