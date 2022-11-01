//@Author: Bautista

const db = require('../database/models');

const CartService = {

    getById: async function(id){
        try{
            const cart = await db.Carts.findByPk(id,
                {
                    include: [ 
                        {
                            association: "Products",
                            include: [
                                {association: "productBrand"},
                                {association: "productImages"},
                                {association: "productCategory"},
                                {association: "Sizes"}
                            ]

                        },
                        
                    ],
                }
            );

        return cart;

        }catch(error){
            console.log(error);
            console.log("No se ha encontrado el carrito #" + id);
        }
    },

    addProduct: async function(cartId, product, quantity, selectedSizeId) {
        try {
            const cart = await this.getById(cartId);
            
            await cart.addProduct(product, 
                { through: 
                    { 
                        quantity: quantity,
                        size_id: selectedSizeId
                    }
                }
            );


        } catch(error) {
            console.log(error);
        }
    },

    deleteProduct: {}
}

module.exports = CartService;