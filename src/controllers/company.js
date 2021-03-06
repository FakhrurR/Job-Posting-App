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
    const { name,location,description } = req.body
    let logo ='';
    if(req.file){
    const host = req.hostname;
    const port = process.env.port;  
    const logo_file = req.file.filename;
    logo = `http://${host}:${port}/public/images/${logo_file}` 
    } 
    const data = {
      id,name,logo,location,description
    }

    companyModels.addCompany(data,id).then(result => {
      res.json({
        status : 200,
        message : 'Success insert data Company',
        data : {
          id,
          name,
          logo,
          location,
          description
        },
        error : false,
        total_data : result.length
        })
      })
      .catch(err => {
        res.status(401).json({
          status : 401,
          message : 'Failed to Save Data',
          error : true,
          })
      })  
  },

  updateCompany : (req,res) => {
      const id = req.params.id
      const {name,location,description} = req.body
      let logo ='';
      if(req.file){
      const host = req.hostname;
      const port = process.env.port;  
      const logo_file = req.file.filename;
      logo = `http://${host}:${port}/public/images/${logo_file}` 
      }
      let data = {}
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