const jobModels = require('../models/job')

const uuid = require('uuid')

module.exports = {
    getJob : (req,res) => {
        jobModels.getJob().then(result => {
            res.json(result)
        })
        .catch(err =>{
            console.log(err)
        }) 
    },

    addJob: (req, res) => {
    const id = uuid();
    const {  name,description,id_category,location,id_company,date_added,date_updated } = req.body
    const data = {
      name,description,id_category,location,id_company,date_added,date_updated
    }

    jobModels.addJob(data,id).then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  },

  updateJob : (req,res) => {
      const id = req.params.id
      const { name,description,id_category,location,id_company,date_added,date_updated } = req.body
      const data = {
        name,description,id_category,location,id_company,date_added,date_updated
        } 

    jobModels.updateJob(data , id)
    .then(result => {
        res.json(result)
    })
    .catch(err => {
        console.log(err)
    })    
  },

  deleteJob : (res,req) => { 
      const id = req.params.id

      jobModels.deleteJob(id)
      .then(result => {
          res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  }

  
}