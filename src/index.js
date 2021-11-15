// traemos el modulo express
const express = require('express');
// Modulo que me dice la ruta del proyecto
const path = require('path'); 
// configuramos handlebars para trabajar las plantillas html como .hbs  ()
const exphbs = require('express-handlebars');

// initiliazations
const app = express();



// settings
    // Configuramos el puerto, si el servicio de la nube no me trae un puerto coloco el puert 3000
    app.set('port', process.env.PORT || 3000); 

    // especificamos el nombre de la carpeta donde estan las vists
    // (_dirnema: devuelve el diretorio raiz del poryect  ) y se concatena con el nombre de la carpeta donde estan las vistas
    // Join: contatena donde variables 
    app.set('views', path.join(__dirname, 'views')); 

    // Creamos el objeto de configuracion exphbs que contiene la informacion de las platillas
    app.engine('.hbs', exphbs({
        defaultLayout   : 'main',                                   // Nombre del archivo principal (layouts)        
        layoutsDir      : path.join(app.get('views'),'layouts'),    // Ruta de la carpeta Layouts 
                                                                    //(obtemos la ruta de la carperta views y la concatenamos con la carpeta layouts)
        partialsDir     : path.join(app.get('views'),'partials'),   // Ruta de las vistas parciales (ej: formulario de contactos )
        extname         : '.hbs'                                    // extencion de los archivos de vistas (html)
    }));

    // configuramos el motor de las vistas (.hbs)
    app.set('view engine','.hbs');                                  

// Middlewares
    app.use(express.urlencoded({extended:false }))



// Global Variables


// Routes


// Static files

// Server is listenning

app.listen(app.get('port'), () => {
    console.log('Sever on port ',app.get('port'));
})

