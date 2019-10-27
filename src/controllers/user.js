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
    const { username,email,password } = req.body
    const data = {
      id,username,email,password
    }

    bcrypt.hash(password, saltRounds, (err,hash) => {
    
      data.password = hash;

      userModels.signupUser(data).then(result => {

        res.json({
        status : 200,
        message : 'Success register user',
        data : {
          id,
          username,
          email,
        },
        error : false,
        total_data : result.length
        })
      })
      .catch(err => {
        console.log(err)
      }); 
    }) 
},

  loginUser: (req, res) => {

    const { email,password } = req.body

    userModels.verifyEmail(email).then(result => {

      console.log(result[0].email)  

      if(result.length > 0){
      
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
          res.json({
            status: 401,
            message: 'Password is incorrect',
            error: true,
          })
        }
      }else{ res.json({message : 'email not register or incorrect'}) }
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
          error : false,
          total_data : result.length
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
          error : false,
          total_data : result.length
          })
      })
      .catch(err => {
        console.log(err)
      })
  }
}