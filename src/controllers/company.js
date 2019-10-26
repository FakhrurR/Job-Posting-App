const companyModels = require('../models/company')

const uuidv4 = require('uuid/v4');

module.exports = {
  
    getCompany : (req,res) => {
      
      companyModels.getCompany().then(result => {
          res.json({
            status : 200,
            message : 'Success get all data',
            data : result,
            error : false,
            total_data : result.length
          })
        })
        .catch(err => {
          console.log(err)
        })  
    },

    getCompanyById : (req,res) => {
      
      const id = req.params.id

      companyModels.getCompanyById(id).then(result => {
          res.json({
            status : 200,
            message : 'Success get all data',
            data : result,
            error : false,
            total_data : result.length
          })
        })
        .catch(err => {
          console.log(err)
        })  
    },

    addCompany: (req, res) => {
    const id = uuidv4()
    const { name,logo,location,description } = req.body
    const data = {
      id,name,logo,location,description
    }

    companyModels.addCompany(data,id).then(result => {
      res.json({
        status : 200,
        message : 'Success insert data Company',
        data,
        error : false,
        total_data : result.length
        })
      })
      .catch(err => {
        console.log(err)
      })  
  },

  updateCompany : (req,res) => {
      const id = req.params.id
      const {name,logo,location,description} = req.body
      const data = {}
      if(name) data.name = name
      if(logo) data.logo = logo
      if(location) data.location = location
      if(description) data.description = description 

    companyModels.updateCompany(data , id)
    .then(result => {
      res.json({
        status : 200,
        message : 'Success update data Company',
        data,
        error : false,
        total_data : result.length
        })
    })
    .catch(err => {
      console.log(err)
    })    
  },

  deleteCompany : (req,res) => { 
      const id = req.params.id

      companyModels.deleteCompany(id)
      .then(result => {
        res.json({
          status : 200,
          data : id,
          message : 'Success delete data Company',
          error : false,
          total_data : result.length
          })
      })
      .catch(err => {
        console.log(err)
      })
  }

  
}