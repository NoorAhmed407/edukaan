const express = require('express');
const router = express.Router();
const multer = require('multer');


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
      cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
  });
  
  const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
  });

const Product = require('./../models/products');



//get single Product
router.get('/:id', (req,res,next)=>{
    Product.findOne({_id: req.params.id}).then(product=>{
        res.send(product);
});
});

//get all Products from database
router.get('/', (req,res,next)=>{
    console.log("route /");
    Product.find({}).then(product=>{
        res.send(product);
    });
});


//Add a new Product to the database
router.post('/', upload.single('pimage') , (req,res, next)=>{
    console.log(req.file);
    console.log("Create product:",req.body);
    const body = {
        ...req.body,
        pimage: req.file.path
    }
    Product.create(body).then(product=>{
        console.log("returning product:", product );
        res.send(product);
    }).catch(next);
});


//Update Product from the database
router.put('/:id', (req,res,next)=>{
    Product.findByIdAndUpdate({_id: req.params.id},req.body)
    .then(product=>{
        Product.findOne({_id: req.params.id}).then(product=>{
            res.send(product);
        });
    });
});

//Delete Product from database
router.delete('/:id', (req,res,next)=>{
    Product.findByIdAndDelete({_id: req.params.id})
    .then(product=>{
        res.send(product);
    });
});

module.exports = router;