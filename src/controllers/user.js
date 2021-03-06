require('dotenv/config')
const userModels = require('../models/user')
const uuidv4 = require('uuid/v4');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;

module.exports = {
  
    getUser : (req,res) => {

      userModels.getAllUser().then(result => {
          res.json({
            status : 200,
            message : 'Success get all data user',
            data : result,
            error : false,
            total_data : result.length
          })
        })
        .catch(err => console.log(err)); 
    },

    getUserById : (req,res) => {

      const id = req.params.id

      userModels.getUserById(id).then(result => {
          res.json({
            status : 200,
            message : 'Success get with id user ',
            data : result,
            error : false,
            total_data : result.length
          })
        })
        .catch(err => console.log(err)); 
    },
    
    signupUser: (req, res) => {
    const id = uuidv4()
    const { username,email,password,name,user_level } = req.body
    let photo = '';
        if(req.file){ 
        const host = req.hostname;
        const port = process.env.port;  
        const photo_file = req.file.filename;
        photo = `http://${host}:${port}/public/images/${photo_file}` 
        }
    const data = {
      id,username,email,password,photo,name,user_level
    }

    userModels.getAllUser(data).then(result => {

    for(let i=0;i < result.length ; i++){  

    if(email != result[i].email){
    
    bcrypt.hash(password, saltRounds, (err,hash) => {
    
      data.password = hash;

      userModels.signupUser(data).then(result => {

        res.json({
        status : 200,
        message : 'Success register user',
        data : {
          id,
          username,
          name,
          email,
          photo,
          user_level
        },
        error : false,
        })
      })
      .catch(err => {
        console.log(err)
      }); 
    })
  }else{
    res.json({
      status : 404,
      message : 'Email is Already Exist',
      error : true,
      })
  }
}
  }) 
},

  loginUser: (req, res) => {

    const { email,password } = req.body

    userModels.verifyEmail(email).then(result => {

      console.log(result[0].email)  
      
      const verifyUser = result[0].email;
      const match = bcrypt.compareSync(password, result[0].password);

        if(match){
        userModels.loginUser(email,password).then(result => {   
          const data = {
               username : verifyUser,
               password : match
             }
            
             jwt.sign(data, process.env.JWT_KEY, { expiresIn: '1h' }, (err, token) => {
              if (err) console.log(err);
              res.json({
                status: 200,
                message: 'Success to login',
                data : {
                  email
                },
                error: false,
                token: 'Bearer ' + token
              });
            });
         })
         .catch(err => {
           console.log(err)
         }); 
        }else{
          res.status(404).json({
            status: 404,
            message: 'Email or Password is incorrect',
            error: true,
          })
        }
    }).catch(err => {
      res.status(404).json({
        status: 404,
        message: 'Email or Password is incorrect',
        error: true,
      })
    })
},

  

  updateUser : (req,res) => {
      const id = req.params.id
      const { username,email,password,name,user_level } = req.body
      
      userModels.getUserByIdWithPassword(id).then(result => {
        let photo = '';
        if(req.file){ 
        const host = req.hostname;
        const port = process.env.port;  
        const photo_file = req.file.filename;
        photo = `http://${host}:${port}/public/images/${photo_file}` 
        }
      const data = {}
      if(username) data.username = username
      if(name) data.name = name
      if(email) data.email = email
      if(photo) data.photo = photo
      if(password) data.password = password
      if(user_level) data.user_level = user_level

      bcrypt.hash(password, saltRounds, (err,hash) => {
    
        data.password = hash;
  
        console.log(data.password)

        userModels.updateUser(data,id).then(result => {
          res.json({
          status : 200,
          message : 'Success Update User',
          data,
          error : false,
          total_data : result.length
          })
        })
        .catch(err => {
          console.log(err)
          next();
        }); 
      })
    });    
  },

  deleteUser : (req,res) => { 
     const id = req.params.id

      userModels.deleteUser(id)
      .then(result => {
        res.json({
          status : 200,
          message : 'Success delete data User',
          error : false,
          total_data : result.length
          })
      })
      .catch(err => {
        console.log(err)
      })
  }
}