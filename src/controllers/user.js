const userModels = require('../models/user')
const uuidv4 = require('uuid/v4');
const bcrypt = require('bcrypt');

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

    
    signupUser: (req, res, next) => {
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
          password : hash
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

  loginUser: (req, res) => {
    const { username,password } = req.body
    const data = {
      username,password
    }   

    
    console.log("password query : " + password)
    console.log("password  data : " + data.password)
     
    userModels.loginUser(data).then(result => {
       
     let compare = bcrypt.compareSync(data.password, result.hash)
    
     if(compare){
      res.json({
        status : 200,
        message : 'Success',
        data,
        error : false
      })
    }
  })
    .catch(err => {
      console.log(err)
      // next();
    }); 
},

  updateUser : (req,res) => {
      const id = req.params.id
      const {username,email,password} = req.body
      const data = {id,username,email,password } 

    userModels.updateUser(data , id)
    .then(result => {
      res.json({
        status : 200,
        message : 'Success update data User',
        data,
        error : false
        })
    })
    .catch(err => {
      console.log(err)
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