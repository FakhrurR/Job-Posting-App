const jobModels = require('../models/job')

const uuidv4 = require('uuid/v4');

// const redis = require('../helpers/redis');


module.exports = {
    getJob : (req,res) => {

        const host = req.hostname

        let {name,company,limit,orderby,page} = req.query;

        if(limit){limit = limit;}else{ limit = 5}
		    if(page){page = page} else {page = 1}
        let offset = limit * (page - 1);

        jobModels.getTotalData().then(result => {

        const total_job = result[0].data
        let total_page = Math.ceil(result[0].data/limit) 
        console.log(page)  
        
        let current_page = parseInt(page)

        let next = 1;
        if(current_page < total_page){
          next = current_page + 1
        }else if(current_page > total_page){
          next;
        }

        let prev = 1;
        if(current_page > 1){
          prev = current_page - 1
        }else if(prev < 1) {
          prev = 1
        } 

        jobModels.getJob(name,company,limit,orderby,offset).then(result => {

          if(result.length < 1){
            res.json({
              status : 404,
              prev,
              message : 'Page Not Found',
              error : true,
              total_data : 0
            })
          }
          else {
            res.json({
              status : 201,
              current_page : page,
              next,
              prev,
              message : 'Success get all data',
              data : result,
              limit : limit,
              error : false,
              total_data : total_job,
              total_page,
            });
          }
        })
        .catch(err => console.log(err)); 
      })
    },

    getJobById : (req,res) => {

      const id = req.params.id

      jobModels.getJobById(id).then(result => {
      
        if(result.length < 1){
          res.json({
            status : 401,
            message : 'Not Found',
            error : true,
            total_data : 0
          })
        }
        else {
          res.json({
            status : 201,
            message : 'Success',
            data : result,
            error : false,
            total_data : result.length
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

      // redis.delCache(req.originalUrl)

      console.log('delete redis')

      res.json({
        status : 200,
        message : 'Success insert job',
        data,
        error : false,
        total_data : result.length
      })
    })
    .catch(err => console.log(err));
  },

  updateJob : (req,res) => {
    
    const id = req.params.id
      const { name,description,id_category,salary,location,id_company } = req.body
      let date_updated = new Date()
      const data = {}
      
      if(name) data.name = name;
      if(description) data.description = description
      if(id_category) data.id_category = id_category
      if(salary) data.salary = salary
      if(location) data.location = location
      if(id_company) data.id_company = id_company
      if(date_updated) data.date_updated = date_updated

      console.log(data.description);

    jobModels.updateJob(data , id)
    .then(result => {

      // redis.delCache(req.originalUrl)
      
      res.json({
        status : 200,
        message : 'Success update job',
        data,
        error : false,
        total_data : result.length
      })
    })
    .catch(err => console.log(err));   
  },

  deleteJob : (req,res) => { 
      
      const id = req.params.id

      jobModels.deleteJob(id)
      .then(result => {

        res.json({
          status : 200,
          message : 'Success delete job',
          data,
          error : false,
          total_data : result.length
        })
      })
      .catch(err => {
        res.json({
          status : 404,
          message : 'Failed delete job',
          error : true,
        })
      });
  },
}