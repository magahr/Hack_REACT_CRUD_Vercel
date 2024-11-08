# Rutas_de_Desarrollo

  Rutas en fospuca:
      C:\Users\mhernandez.FOSPUCA\Documents\cursos\Ciclo08\Practica\hack\React
          
          Repo:

          C:\Users\mhernandez.FOSPUCA\Documents\cursos\Ciclo08\Practica\hack\React\Hack_REACT_CRUD_Vercel

          
  Rutas en Casa:
      
  link video:

      https://www.youtube.com/watch?v=Vjd7oXmCjmg
     
1.- Instalación de React
   
    npx create-react-app

    Esto crea una estructura inicar del proyecto.

    1.1.- Si se está haciendo un cambio de directorio o de pc hacer lo siguiente:
         
        npm install

2.- Inicar el servidor
    
    npm run start

3.- Instalar Router

       npm install react-router-dom

3.- Instalar Json server

       json server github
       https://github.com/typicode/json-server

       hacer esto:
          uno ejecutar:

               npm install json-server

           crear el archivo db.json or db.json5 file, en la raiz, con el contenido:

                {
                "users": [
                    { "id": "1", "nombre": "Juan", "edad": 33, "correo": "juan123@gmail.com" },
                    { "id": "2", "nombre": "Adrian", "edad": 31, "correo": "adrian123@gmail.com"},
                    { "id": "2", "nombre": "Vanessa", "edad": 28, "correo": "vanessa123@gmail.com"}
                ]
                }

           ejectuar el siguiente comando en bash:

                npx json-server db.json --port 3004 (importante un puerto diferente al de la aplicacion, 
                que por lo generarl es el pueto 3000)
                haciendolo asi se va a generarl el server por el puerto 
                    http://localhost:3004/users
















3.- Instalar axios
    
        npm install axios

4.- Instalar Router

       npm install react-router-dom

5.- Instalar formik yup axios
    npm install formik yup axios

6.- Instalar Link
    import { Link } from 'react-router-dom';

2.- Inicar el servidor
    npm run start

    si no funciona el anterior intentar con:
    npm init react-app my-app

3.- Colocar las extensiones en Visual code
    ES7 React/Redux/GraphQL/Rea
    ES7+ React/Redux/React-Native snippets

4.- A los componentes cambiarle la extension a .jsx, dajando al index con .js
    (Esto facilita la creacnpion de las etiquetas HTML)

5.- rutas:
    https://reactrouter.com/en/main

6.- boostrap
    https://getbootstrap.com/

7.- w3shool
    https://www.w3schools.com/bootstrap5/index.php
    
git commit -m "14-10-2024 my first commit" 


estensiones:

Control de cambio:

git commit -m "07-11-2024-Starting the project with react hack goog look!!"
git commit -m "08-11-2024-Update the project in my job"
git commit -m "08-11-2024-Update the project in my job. I going to 29:19 minutes"