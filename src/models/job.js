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
      conn.query('SELECT * FROM job', data, (err,result) => {
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
      conn.query('UPDATE INTO job SET ? WHERE id=?', (data,id), (err, result) => {
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
      conn.query('DELETE FROM job WHERE id=?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}
