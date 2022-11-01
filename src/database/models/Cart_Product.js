module.exports = (sequelize, dataTypes) => {
    let alias = "CartProducts";
    let cols = {
        
        cart_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            notNull: true,

        },
        product_id:{
            type: dataTypes.INTEGER,
            notNull: true,
            primaryKey: true,

        },
        quantity:{
            type: dataTypes.SMALLINT(3),
            defaultValue: null,
        },
        size_id:{
            type: dataTypes.SMALLINT(3),
            notNull: true,
        }
    }

    let config = {
        tableName: "carts_products", 
        timestamps: false,
        underscored: true
    }

    const Cart_Product = sequelize.define(alias, cols, config);

    Cart_Product.associate = function(models){
        Cart_Product.belongsTo(models.Sizes,{
            foreignKey: "size_id",
            as: "selectedSize"
        });
    }
    return Cart_Product;
}