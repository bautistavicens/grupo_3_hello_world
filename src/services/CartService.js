//@Author: Bautista

const db = require('../database/models');

const CartService = {

    getById: async function(id){
        try{
            const cart = await db.Carts.findByPk(id,
                {
                    include: [ 
                        {association: "Products"},
                    ],
                }
            );

        return cart;

        }catch(error){
            console.log(error);
            console.log("No se ha encontrado el carrito #" + id);
        }
    }
}

module.exports = CartService;