const conn = require('../configs/db')

module.exports = {
  addJob: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO job SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getJob: (data) => {
    return new Promise((resolve,reject) => {
      conn.query('SELECT j.id, j.decription, c.name AS category, j.created_at, j.updated_at FROM job j JOIN category c WHERE j.id_category = c.id', data, (err,result) => {
        if(err){
          reject(result)
        }else {
          resolve(result)
        }
      })
    })
  },
  updateJob: (data,id) => {
    return new Promise((resolve, reject) => {
      conn.query('UPDATE job SET ? WHERE id=?', [data,id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteJob: (id) => {
    return new Promise((resolve, reject) => {
      conn.query('DELETE FROM job WHERE id=?', [id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}
