

const home = (req, res) =>{
    res.json ({
        mensaje:"Hola Mundo ExpressJS"
    });
    
}

const saludo = (req, res) =>{   
    res.json ({
        mensaje:"Saludando  ExpressJS"
    });
}


//req:peticion-informacion que recibimos (params,body,callback)
    const tablaMulti =(req, res) =>{
        let numero =1;
        res.send(`La tabla del numero ${numero}`);
    };

const contacto =(req,res) => {
    const contacto = req.body;
    console.log(contacto);
    res.json({
        msg:"Mensaje enviado ´por el administrador, pronto lo contactamos"
    });
};

           
    





export {
    home,
    saludo,
    tablaMulti,
    contacto
}