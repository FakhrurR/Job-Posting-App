const categoryModels = require('../models/categories')

module.exports = {
    getCategory : (req,res) => {
        categoryModels.getCategory().then(result => {
            res.json(result)
        })
        .catch(err =>{
            console.log(err)
        }) 
    },
    addCategory: (req, res) => {
    const { name } = req.body
    const data = {
      name
    }

    categoryModels.addCategory(data).then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  },

  updateCategories : (req,res) => {
      const id = req.params.id
      const {name} = req.body
      const data = {
          name
        } 

    categoryModels.updateCategories(data , id)
    .then(result => {
        res.json(result)
    })
    .catch(err => {
        console.log(err)
    })    
  },

  deleteCategories : (res,req) => { 
      const id = req.params.id

      categoryModels.deleteCategories(id)
      .then(result => {
          res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  }

  
}