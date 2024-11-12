# Rutas_de_Desarrollo

  Rutas en trabajo:

      C:\Users\mhernandez.FOSPUCA\Documents\cursos\Ciclo08\Practica\hack\React
          
          Repo:

          C:\Users\mhernandez.FOSPUCA\Documents\cursos\Ciclo08\Practica\hack\React\Hack_REACT_CRUD_Vercel

          
  Rutas en Casa:

         C:\Users\Magahr\Documents\cursos\socialOplesk\socialOplesk\Ciclo08\Practicas\hacks\Hack_REACT_CRUD\Hack_REACT_CRUD_Vercel 

      
  link video:

      https://www.youtube.com/watch?v=Vjd7oXmCjmg

      https://www.youtube.com/watch?v=Tjl3HgxvMWM

     
1.- Instalación de React
   
    npx create-react-app

    Esto crea una estructura inicar del proyecto.

    1.1.- Si se está haciendo un cambio de directorio o de pc hacer lo siguiente:
         
        npm install

2.- Inicar el servidor

    npm run build (si el directorio build no esta)
    
    npm run start  (la app)

    npm run dev (levanta los dos server al mismo tiempo)

    npx json-server db.json --port 3004 (el server de json)


3.- Instalar Router

       npm install react-router-dom
       npm install -g concurrently

4.- Instalar Json server

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
                haciendolo asi se va a generar el server por el puerto 
                    http://localhost:3004/formularios

5.- Usar 
    
    https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API



https://hack-react-crud-vercel.vercel.app/formulario



"scripts": {
     "dev": "concurrently \"npm start\" \"json-server db.json --port 3004\"",
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"

  },


Control de cambio:

git commit -m "07-11-2024-Starting the project with react hack goog look!!"
git commit -m "08-11-2024-Update the project in my job"
git commit -m "08-11-2024-Update the project in my job. I going to 29:19 minutes"
git commit -m "09-11-2024-Updating the project with Create, Updating and Deling, but Create is not very good, I have to reparing"
**git commit -m "10-11-2024-Updating the project with Create, Updating and Deleting"**
**git commit -m "10-11-2024-Updating the Vercel json"**
git commit -m "11-11-2024-Updating dbjson"