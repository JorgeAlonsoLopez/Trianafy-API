# Trianafy-API

El proyecto consiste en la creación de una API REST con express sobre node, conectada a una base de datos de mongodb y conectada con mongoose. 

Con ella se van a gestionar unas colecciones de canciones y listas de reproducción. A tener en cuenta que se implementa JWT, por lo que será necesario que nos registremos e iniciemos sesión con la cuenta para obtener el token, establecer una autorización del tipo Bearer token y poder hacer las peticiones sobre las canciones y listas de reproducción. 

A continuación, se van a resumir las distintas peticiones indicando su función, ruta, método de petición HTTP y los parámetros que son necesarios.

Se hará uso de los siguientes comandos: ```npm install```, para instalar las librerías necesarias y ``` npm start ``` para arrancar la aplicación. En el caso de que no tenga la base de datos, se cargarán datos de prueba.

<br/><br/>
## Login y registro de usuarios
<br/>

| Función  | HTTP     | URL           | Parámetros en el cuerpo                    |
|----------|----------|---------------|-------------------------------|
| Registro | POST     | auth/register | nombre (requerido / alfabético / 3 caracteres mínimo (nombre y apellidos))<br/>usuario (requerido / alfanumérico / 3 caracteres mínimo)<br/> email (requerido / email)<br/> password (requerido / 6 caracteres mínimo) |
| Login    | POST/GET | auth/login    | email (requerido)<br/> password (requerido)           |

<br/><br/>
## Canciones
<br/>

| Función                    | HTTP   | URL         | Parámetros en el cuerpo |
|----------------------------|--------|-------------|------------|
| Nueva canción              | POST   | /songs      |  title (requerido / 1 caracter mínimo)<br/>artist (requerido / 1 caracter mínimo)<br/> album (opcional)<br/> year (requerido / numero / mayor a 1929 y menor o igual al año actual)          |
| Listar todas las canciones | GET    | /songs      |            |
| Obtener una canción        | GET    | /songs/{id} |            |
| Modificar una canción      | PUT    | /songs/{id} |title (requerido / 1 caracter mínimo)<br/>artist (requerido / 1 caracter mínimo)<br/> album (opcional)<br/> year (requerido / numero / mayor a 1929 y menor o igual al año actual)            |
| Eliminar una canción       | DELETE | /songs/{id} |            |

<br/>

El **id** hace referencia al id de la canción.
<br/><br/><br/>

## Listas de reproducción
<br/>

| Función                  | HTTP   | URL         | Parámetros en el cuerpo |
|--------------------------|--------|-------------|------------|
| Nueva lista              | POST   | /lists      | name (requerido / 1 caracter mínimo)<br/> description (opcional)<br/> privat (requerido / boolean)          |
| Obtener todas las listas públicas | GET    | /lists/all      |            |
| Obtener todas las listas pertenecientes al usuario| GET    | /lists      |            |
| Obtener una lista        | GET    | /lists/{id} |            |
| Modificar una lista      | PUT    | /lists/{id} | name (requerido / 1 caracter mínimo)<br/> description (opcional)<br/> privat (requerido / boolean)              |
| Eliminar una lista       | DELETE | /lists/{id} |            |
| Añadir una canción a una lista          | POST   | /lists/{id1}/songs/{id2} |            |
| Listar todas las canciones de una lista | GET    | /lists/{id}/songs        |            |
| Obtener una canción de una lista        | GET    | /lists/{id1}/songs/{id2} |            |
| Eliminar una canción de una lista       | DELETE | /lists/{id1}/songs/{id2} |            |

<br/>

Al crear una lista de reproducción, a esta lista se le asigna el id del token perteneciente al usuario logeado, por lo que solo ese mismo usuario va a poder editarla, a nivel de información y de canciones, o borrarla. Se puede establecer como privada (privat = ```true```) o pública (privat = ```false```), permitiendo al resto de usuarios verla.

El **id** e **id1** hace referencia al id de la lista y el **id2** al de la canción.

<br/>

## Variables de entorno
<br/>
Las variables de entorno, junto con ejemplos, son:  
<br/><br/>
DB_URI=mongodb://localhost/mongoose (URL de la base de datos)
<br/>
PORT=3000 (Puerto de la aplicación)  
<br/>
JWT_SECRET=esteEsElSecretoMásSecretoDeTodosLosSecretos (El secreto que va a conformar la firma del token)
<br/>
BCRYPT_ROUNDS=12 (Número de rondas utilizadas para el algoritmo de hashing de la contraseña)  
<br/>
JWT_LIFETIME=1d (Tiempo de vida del token)
<br/>
JWT_ALGORITHM=HS256 (Algoritmo de cifrado del token)  

<br/><br/>
## Librerías usadas

<br/>

| Lbrería                  | Versión   |
|--------------------------|--------|
| bcryptjs               | 2.4.3   |
| body-parser               | 1.19.0   |
| cors               | 2.8.5   |
| dotenv               | 8.2.0   |
| express               | 4.17.1   |
| express-validator               | 6.9.2   |
| jsonwebtoken               | 8.5.1   |
| mongoose               | 5.11.12   |
| morgan               | 1.10.0   |
| morgan-body               | 2.6.4   |
| passport               | 0.4.1   |
| passport-jwt               | 4.0.0   |
| passport-local               | 1.0.0   |
| validator               | 13.5.2   |
| @babel/core               | 7.12.10   |
| @babel/node               | 7.12.10   |
| @babel/preset-env               | 7.12.11   |
| nodemon               | 2.0.7   |