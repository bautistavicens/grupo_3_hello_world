//@Author: Bautista

const db = require('../database/models');
const { Op } = require("sequelize");

const CartProductService = {
    deleteProductFromCart: async function(cartId, productId){
        try{
            await db.CartProducts.destroy({
                where: {
                    [Op.and]: [
                        { cart_id: cartId }, { product_id: productId }
                    ]
                }
            });
            
            console.log("Se ha eliminado correctamente el producto #" + productId + " del carrito #" + cartId);
        }
        catch(error){
            console.log(error);
        }
    },

    verifyProductExistanceInCart: async function(cartId, productId){
        try{
            const product = await db.CartProducts.findOne({
                where: {
                    [Op.and]: [
                        { cart_id: cartId }, { product_id: productId }
                    ]
                }
            });
            console.log(product);
            return product;
        }
        catch(error){
            console.log(error);
        }
    },

    modifyProductQuantity: async function(cartId, productId, newQuantity){
        try{
            await db.CartProducts.update(
                {
                    quantity: newQuantity
                },
                {
                    where: {
                        [Op.and]: [
                            { cart_id: cartId }, { product_id: productId }
                        ]
                    }
                }
            )
            
        }
        catch(error){
            console.log(error);
        }
    } 

}

module.exports = CartProductService;