const jobModels = require('../models/job')

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
    const { name } = req.body
    const data = {
      name
    }

    jobModels.addJob(data).then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  },

  updateJob : (req,res) => {
      const id = req.params.id
      const {name} = req.body
      const data = {
          name
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