const express = require("express");
const router = express.Router();


router.get('/',(req,resp)=>{
    try{
        resp.header = {'Content-Type': 'application/json'};
        resp.statusCode = 200;
        resp.json([
            {
                "uf": "sp",
                "nome": "São Paulo"
            },
            {
                "uf": "rj",
                "nome": "Rio de Janeiro"
            },
            {
                "uf": "mg",
                "nome": "Minas Gerais"
            }
            ]);
    }catch (e){
        resp.statusCode = 500;
    }
});


router.get('/:uf',(req,resp)=>{
    try{
        resp.header = {'Content-Type': 'application/json'};
        resp.statusCode = 200;
        var estados = 
        [
            {
                "uf": "sp",
                "nome": "São Paulo"
            },
            {
                "uf": "rj",
                "nome": "Rio de Janeiro"
            },
            {
                "uf": "mg",
                "nome": "Minas Gerais"
            }
            ]
            ;
           var result =  estados.find((item)=>{
               return  item.uf === req.params.uf;
            });
        resp.json(result);
    }catch (e){
        resp.statusCode = 500;
    }
});


module.exports = router;