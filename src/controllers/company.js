const companyModels = require('../models/company')

const uuidv4 = require('uuid/v4');

module.exports = {
  
    getCompany : (req,res) => {
      
      companyModels.getCompany().then(result => {
          res.json({
            status : 200,
            message : 'Success get all data',
            data : result,
            error : false
          })
        })
        .catch(err =>{
            console.log(err)
        }) 
    },

    addCompany: (req, res) => {
    const id = uuidv4()
    const { name,logo,location,description } = req.body
    const data = {
      name,logo,location,description
    }

    companyModels.addCompany(data,id).then(result => {
      res.json({
        status : 200,
        message : 'Success insert data Company',
        data,
        error : false
        })
      })
      .catch(err => {
        console.log(err)
      })
  },

  updateCompany : (req,res) => {
      const id = req.params.id
      const {name,logo,location,description} = req.body
      const data = { name,logo,location,description } 

    companyModels.updateCompany(data , id)
    .then(result => {
      res.json({
        status : 200,
        message : 'Success update data Company',
        data,
        error : false
        })
    })
    .catch(err => {
        console.log(err)
    })    
  },

  deleteCompany : (res,req) => { 
      const id = req.params.id

      companyModels.deleteCompany(id)
      .then(result => {
        res.json({
          status : 200,
          message : 'Success delete data Company',
          error : false
          })
      })
      .catch(err => {
        console.log(err)
      })
  }

  
}