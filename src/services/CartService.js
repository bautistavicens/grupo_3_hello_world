//@Author: Bautista

const db = require('../database/models');

const CartService = {

    getById: async function(id){
        try{
            let cart = await db.Carts.findByPk(id,
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
        
        cart.Products.forEach(async product => {
            product.selectedSize = await db.Sizes.findByPk(product.CartProducts.selected_size_id);
            
        });
            

        return cart;

        }catch(error){
            console.log(error);
            console.log("No se ha encontrado el carrito #" + id);
        }
    },

    addProduct: async function(cartId, product, quantity, selectedSizeId) {
        try {
            let cart = await this.getById(cartId);
            
            await cart.addProduct(product, 
                { through: 
                    { 
                        quantity: quantity,
                        selected_size_id: selectedSizeId
                    }
                }
            );


        } catch(error) {
            console.log(error);
        }
    }
}

module.exports = CartService;