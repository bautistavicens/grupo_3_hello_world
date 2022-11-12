const cartService = require('../services/CartService.js');
const productService = require('../services/ProductService.js');
const cartProductService = require('../services/CartProductService.js');
const path = require('path');


const cartController = {

    display: async function(req, res){
        try{
            const user = req.session.loggedUser;

            let userCart = await cartService.getById(user.cart_id);

            res.render(path.join(__dirname, '../views/cart.ejs'), {cart: userCart});

        } catch(error){
            console.log(error);
        };

    },

    addProduct: async function(req, res) {
        try{
            //Get user's cart id from session
            const userCartId = req.session.loggedUser.cart_id;
            
            //get selected product size from body
            const selectedSizeId= parseInt(req.body.selectedSizeId);
            
            //get quantity from body
            const quantity = parseInt(req.body.quantity);

            //get product id
            const productId = req.params.id;

            //Verify if the product is already in user's cart
            const productInCart = await cartProductService.verifyProductExistanceInCart(userCartId, productId )

            //If there's no product
            if(productInCart == null){
                //Get product from DB
                const product = await productService.getById(productId);
                
                //Add product into user's cart
                await cartService.addProduct(userCartId, product, quantity, selectedSizeId)
            }
            //If product exists
            else{

                //Modifies quantity
                const newQuantity = productInCart.quantity + quantity

                //Modifies product quantity
                await cartProductService.modifyProductQuantity(userCartId, productId, newQuantity);
            }     
            
            res.redirect('/cart');
        }
        catch(error){
            console.log(error);
            res.send("Ha ocurrido un problema!");
        }
    },

    deleteProduct: async function (req, res){
        try{
            //Get user's cart id from session
            const userCartId = req.session.loggedUser.cart_id;

            //get product id
            const productId = req.params.id;
            
            //delete product from user's cart
            cartProductService.deleteProductFromCart(userCartId, productId);

            res.redirect('/cart');
        }
        catch(error){
            console.log(error);
            res.send("Ha ocurrido un problema!");
        }
    }
}
//Export.
module.exports = cartController;