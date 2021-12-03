const mongoose = require('mongoose');

//conectar con la base de datos sales
mongoose.connect('mongodb://localhost:27017/sales',{
    useNewUrlParser: true,
    useUnifiedTopology:true
});

//esquema de la collección products
const Products = mongoose.model('products',{
    description: {type:String},
    price:{type:Number},
    category: {type:String},
    qty: {type:Number},
    createdAt: {type:Date}
});

//exportamos la colección products
module.exports = Products;