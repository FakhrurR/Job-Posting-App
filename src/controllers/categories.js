const categoryModels = require('../models/categories')

module.exports = {
    getCategory : (req,res) => {
        categoryModels.getCategory().then(result => {
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

    addCategory: (req, res) => {
    const { name } = req.body
    const data = { name }

    categoryModels.addCategory(data).then(result => {
        res.json({
          status : 200,
          message : 'Success insert data Category',
          data,
          error : false,
          total_data : result.length
        })
      })
      .catch(err => {
        console.log(err)
      })
  },


  updateCategory : (req,res) => {
    const id = req.params.id
    const {name} = req.body
    const data = { } 
    if(name) { data.name = name }
   categoryModels.updateCategory(data,id)
   .then(result => {
      res.json({
        status : 200,
        message : 'Success update data with id Category : ' + id,
        data,
        error : false,
        total_data : result.length
      })
  })
  .catch(err => {
    console.log(err)
  })    
 },

  deleteCategory : (req, res) => {
  const id = req.params.id

  categoryModels.deleteCategory(id).then(result => {
      res.json({
        status : 200,
        message : 'Success delete data Category',
        error : false,
        total_data : result.length
      })
    })
    .catch(err => {
        console.log(err)
      })
    }
  }