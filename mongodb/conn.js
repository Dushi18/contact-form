const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/project3", {
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
  
  }).then(() =>{
    console.log('DB connection succesful');
  }).catch((err)=>{
    console.log(err);
  });
  