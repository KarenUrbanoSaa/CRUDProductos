const express = require('express');
const router = express.Router();

//settear el modelo para products
const Products = require('../db/connect');

router.get('/api/v1/products',function(req,res){
    //traer todos los documentos de la colección products
    Products.find(function(err,result){
        if(!err){
            res.json(result);
            console.log(result);
        }else{
            res.json({error:err});
        }
    });
});

//ruta de la plantilla enviando parámetros a la vista
router.get('/api/v1/products/viewpro',function(req,res){
    res.render('products/prod_views',{titulo:'Add product'});
});

router.get('/api/v1/products/:id',function(req,res){
    
    const{id}= req.params
    
    //traer sólo un documento específico de la colección products
    Products.find({_id:id},function(err,result){
        if(!err){
            res.json(result);
            console.log(result);
        }else{
            res.json({error:err});
        }
    });
});

//agregar productos a la db
router.post('/api/v1/products/add',function(req,res){
    const pds = new Products(req.body);
    pds.save(function(err,pro){
        if(!err){
            res.json({status:'Producto creado con éxito'});
        }else{
            res.json({status:err});
        }
    });
});

//actualizar un producto
router.put('/api/v1/products/update/:id',function(req,res){
    const {id} = req.params;
    const{description,price,category,qty} = req.body;
    Products.updateOne({_id:id},{
        $set:{
            description:description,
            price:price,
            category: category,
            qty:qty
        }
    },function(err,pro){
        if(!err){
            res.json({status:'Producto modificado con éxito'});
        }else{
            res.json({status:err});
        }
    });
});

//eliminar un producto
router.delete('/api/v1/products/remove/:id',function(req,res){
    const {id} = req.params;
    Products.deleteOne({_id:id},function(err,pro){
        if(!err){
            res.json({status:'Producto borrado'});
        }else{
            res.json({status:err});
        }
    });
});

module.exports = router;