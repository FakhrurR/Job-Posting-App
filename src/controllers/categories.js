const categoryModels = require('../models/categories')

module.exports = {
    getCategory : (req,res) => {
        categoryModels.getCategory().then(result => {
            res.json({
              status : 200,
              message : 'Success get all data',
              data : result,
              error : false
            })
        })
        .catch(err =>{
          res.json({
            status : 404,
            message : err,
            error : true
          })
        }) 
    },

    addCategory: (req, res) => {
    const { name } = req.body
    const data = { name }

    categoryModels.addCategory(data).then(result => {
        res.json({
          status : 200,
          message : 'Success insert data Category',
          data,
          error : false
        })
      })
      .catch(err => {
        res.Status(404).json({
          status : 404,
          message : err,
          data,
          error : true
        })
      })
  },


  updateCategory : (req,res) => {
    const id = req.params.id
    const {name} = req.body
    const data = { name } 

   categoryModels.updateCategory(data,id)
   .then(result => {
      res.json({
        status : 200,
        message : 'Success update data with id Category : ' + id,
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

  deleteCategory : (req, res) => {
  const id = req.params.id

  categoryModels.deleteCategory(id).then(result => {
      res.json({
        status : 200,
        message : 'Success delete data Category',
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
  }
  
}