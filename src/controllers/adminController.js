//Path Module.
const path = require('path');

//products-array Module.
/*(!)Por el momento se le hara mención en comentarios semejandolo con una base de datos*/ 
/*(!) Quitar, a futuro, por la database de los productos*/ 
const productos = require('../products-array');

/*----------------------------------------------------------------------------*/
//Los datos dentro de esta sección deberan ser colocados en una base de datos.
const categoriasArray = ["Botas", "Mocacines", "Urbano", "Zapatillas"];
const coloresArray = ["Marron", "Chocolate", "Negro", "Blanco", "Azul", "Habano"];
const tallesArray = [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44];
/*----------------------------------------------------------------------------*/

const AdminController = {

    newProduct: function(req, res){
        res.render(path.join(__dirname, '../views/products/newProduct.ejs'), 
        {   
            categorias: categoriasArray, 
            colores: coloresArray, 
            talles: tallesArray
        });
    },

    editById: function(req, res){

        //Buscar  en la base la id del producto pasado por paramentros en el req.
        const producto = productos.find(producto => {
            return producto.id == req.params.id;
        });
        
        /*Si no encuentra el producto*/
        if(producto == undefined){
            res.send("ERROR.\nProducto no encontrado!");
        }

        /*Sí encuentra el producto*/
        else{
            res.render(path.join(__dirname, '../views/products/editProduct.ejs'),
            {
                producto: producto,  
                categorias: categoriasArray, 
                colores: coloresArray, 
                talles: tallesArray  
            });
        }
    }
}

module.exports = AdminController;
