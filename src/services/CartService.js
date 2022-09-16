//@Author: Bautista

const db = require('../database/models');

const CartService = {

    getById: async function(id){
        try{
            const product = db.Product.findByPk(id,
                {
                    include: [ 
                        {association: "CartProducts"},
                    ],
                }
            );

        return product;

        }catch(error){
            console.log(error);
            console.log("No se ha encontrado el producto #" + id);
        }
    }
}

module.exports = CartService;