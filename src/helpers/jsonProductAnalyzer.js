//File System Module.
const fs = require('fs');

//Path Module.
const path = require('path');

//Products DataBase path 
const productsFilePath = path.join(__dirname, '../data/products-database.json');

//Products DataBase

const JsonProductsAnalyzer = {

    read: function() {
        //Products DataBase
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        //if array is empty, returns a default mockup
        if(products.length === 0){
            return [
                {
                    id: 1,
                    titulo: "Example",
                    colores: ["Marron","Negro"],
                    categoria: "Botas",
                    porcentajeDescuento: 0,
                    precio: 0,
                    talles: [40,42,43],
                    descripcion: "Este producto está a modo de ejemplo.\nEliminar una vez que haya agregado productos",
                    imagenesUrl: ["/img-zapato-default.webp"]
                }
            ];
        }
        //returns products array 
        else{
            return products;
        }
    },

    write: function(newProduct) {
        //Get products DataBase.
        let products = this.read;
        
        //Adds new product
        products.push(newProduct);

        //Transform to JSON.
		const newData = JSON.stringify(products);

        //Write File.
		fs.writeFile(productsFilePath, newData, err => {
			
            // error checking
			if(err) throw err;

			console.log("New data added -> products-database");
		});  
    }
}

module.exports = JsonProductsAnalyzer;