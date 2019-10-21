const jobModels = require('../models/job')

const uuidv4 = require('uuid/v4');

module.exports = {
    getJob : (req,res) => {
      //  const { orderby, limit, page } = req.query;

      //  limit = limit || 5;
		  //  page = page || 1;
		  //  const offset = limit * (page - 1);

		  // if (orderby == 'name') {
			// orderby = 'j.name';
		  // } else if (orderby == 'category') {
			// orderby = 'c.name';
		  // } else {
			// orderby = 'j.updated_at';
		  // }

        jobModels.getJob().then(result => {
            res.json({
              status: 200,
              error: false,
              message: 'Success',
              data: result
            });
        })
        .catch(err =>{
          res.json({
            status : 404,
            message : err,
            error : true
          })
        }) 
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
      .catch(err => {
        res.json({
          status : 404,
          message : err,
          error : true
        })
      })
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
    .catch(err => {
      res.json({
        status : 404,
        message : err,
        error : true
      })
    })    
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
      .catch(err => {
        res.json({
          status : 404,
          message : err,
          error : true
        })
      })
  },

  searchJob : (req,res) => { 
    const { name,company } = req.query;
    // console.log(company)
    jobModels.searchJob(name,company)
    .then(result => {
      if(result.length < 1){
      res.json({
        status : 200,
        message : 'Success',
        data,
        error : false
      })
    }
    else {
      res.json(result);
    }
  })
    .catch(err => {
      res.json({
        status : 404,
        message : 'Failed Search',
        error : true
      })
    })
}

}