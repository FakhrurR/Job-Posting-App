const jobModels = require('../models/job')

const uuidv4 = require('uuid/v4');

const redis = require('../helpers/redis');


module.exports = {
    getJob : (req,res) => {

        let {name,company,limit,orderby,page} = req.query;

        if(limit){limit = limit;}else{ limit = 5}
		    if(page){page = page;}else{ page = 1}
		    let offset = limit * (page - 1);

        let redis_key = '';
        if(name){ redis_key = redis_key + name }
        if(company){ redis_key = redis_key + company }

        jobModels.getJob(name,company,limit,orderby,offset).then(result => {
        
          let data = JSON.stringify(result);

				  redis.caching(redis_key, data);

          if(result.length < 1){
            res.json({
              status : 401,
              message : 'Empty',
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