require('dotenv/config')
const userModels = require('../models/user')
const uuidv4 = require('uuid/v4');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;

module.exports = {
  
    getUser : (req,res) => {
      
      userModels.getUser().then(result => {
          res.json({
            status : 200,
            message : 'Success get all data user',
            data : result,
            error : false
          })
        })
        .catch(err => console.log(err)); 
    },

    
    signupUser: (req, res) => {
    const id = uuidv4()
    const { username,email,password } = req.body
    const data = {
      id,username,email,password
    }

    bcrypt.hash(password, saltRounds, (err,hash) => {
    
      data.password = hash;

      userModels.signupUser(data).then(result => {
        res.json({
        status : 200,
        message : 'Success',
        data : {
          id,
          username,
          email,
        },
        error : false
        })
      })
      .catch(err => {
        console.log(err)
        // next();
      }); 
    }) 
  },

  loginUser: (req, res) => {
    let { username,password } = req.body

    userModels.getUser().then(result => {

      const user = result.filter(person => 
        person.username == username);

        bcrypt.compare(password, user[0].password).then(function(suitable) {
        
        if(suitable){
          
        userModels.loginUser(username,password).then(result => {   
          const data = {
               username : user[0].username,
               password : user[0].password
             }
            
             jwt.sign(data, 'secret', { expiresIn: '1h' }, (err, token) => {
              if (err) console.log(err);
              res.json({
                status: 200,
                message: 'Success to login',
                data ,
                error: false,
                token: 'Bearer ' + token
              });
            });
         })
         .catch(err => {
           console.log(err)
         });
        }
        else{
          res.json({
            status : 401,
            message : 'Username or Password is Wrong',
            error : true
        })
        } 
      }) 
     
    }) 
},

  updateUser : (req,res) => {
      const id = req.params.id
      const { username,email,password } = req.body
      const data = {}
      if(username) data.username = username
      if(email) data.email = email
      if(password) data.password = password

      bcrypt.hash(password, saltRounds, (err,hash) => {
    
        data.password = hash;
  
        console.log(data.password)

        userModels.updateUser(data).then(result => {
          res.json({
          status : 200,
          message : 'Success update',
          data : {
            id,
            username,
            email,
          },
          error : false
          })
        })
        .catch(err => {
          console.log(err)
          next();
        }); 
      })    
  },

  deleteUser : (req,res) => { 
     const id = req.params.id

      userModels.deleteUser(id)
      .then(result => {
        res.json({
          status : 200,
          message : 'Success delete data User',
          error : false
          })
      })
      .catch(err => {
        console.log(err)
      })
  }
}