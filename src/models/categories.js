const conn = require('../configs/db')

module.exports = {
  addCategory: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO category SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getCategory: (data) => {
    return new Promise((resolve,reject) => {
      conn.query('SELECT * FROM category', data, (err,result) => {
        if(err){
          reject(new Error(err))
        }else {
          resolve(result)
        }
      })
    })
  },
  
  updateCategory: (data,id) => {
    return new Promise((resolve, reject) => {
      conn.query('UPDATE category SET ? WHERE id=?', [data,id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteCategory: (id) => {
    return new Promise((resolve, reject) => {
      conn.query('DELETE FROM category WHERE id=?', [id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}
