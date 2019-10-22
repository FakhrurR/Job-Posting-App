const jobModels = require('../models/job')

const uuidv4 = require('uuid/v4');

module.exports = {
    getJob : (req,res) => {
      

        const {name,company,limit,orderby,offset} = req.query;

        jobModels.getJob(name,company,limit,orderby,offset).then(result => {
          
          if(result.length < 1){
            res.json({
              status : 200,
              message : 'Empty',
              data : result,
              error : false
            })
          }
          else {
            res.json({
              status : 201,
              message : 'Success',
              data : result,
              error : false
            });
          }
        })
        .catch(err => console.log(err)); 
    },

    addJob: (req, res) => {
    const id = uuidv4();
    const {  name,description,id_category,salary,location,id_company } = req.body
    const data = {
      id,
      name,
      description,
      id_category,
      salary,
      location,
      id_company,
      date_added : new Date(),
      date_updated : new Date()
    }

    jobModels.addJob(data,id).then(result => {
      res.json({
        status : 200,
        message : 'Success insert job',
        data,
        error : false
      })
    })
    .catch(err => console.log(err));
  },

  updateJob : (req,res) => {
      const id = req.params.id
      const { name,description,id_category,salary,location,id_company } = req.body
      const data = {
       id,
       name,
       description,
       id_category,
       salary,
       location,
       id_company,
       date_added : new Date(),
       date_updated : new Date()
        } 

    jobModels.updateJob(data , id)
    .then(result => {
        res.json({
        status : 200,
        message : 'Success update job',
        data,
        error : false
      })
    })
    .catch(err => console.log(err));   
  },

  deleteJob : (res,req) => { 
      const id = req.params.id

      jobModels.deleteJob(id)
      .then(result => {
        res.json({
          status : 200,
          message : 'Success delete job',
          data,
          error : false
        })
      })
      .catch(err => console.log(err));
  },
}