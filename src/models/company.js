const conn = require('../configs/db')

module.exports = {
  addCompany: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO company SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getCompany: (data) => {
    return new Promise((resolve,reject) => {
      conn.query('SELECT * FROM company', data, (err,result) => {
        if(err){
          reject(new Error(err))
        }else {
          resolve(result)
        }
      })
    })
  },

  getCompanyById: (id) => {
    return new Promise((resolve,reject) => {
      conn.query('SELECT * FROM company WHERE id=?', [id], (err,result) => {
        if(err){
          reject(new Error(err))
        }else {
          resolve(result)
        }
      })
    })
  },

  updateCompany: (data,id) => {
    return new Promise((resolve, reject) => {
      conn.query('UPDATE company SET ? WHERE id=?', [data,id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteCompany: (id) => {
    return new Promise((resolve, reject) => {
      conn.query('DELETE FROM company WHERE id=?', [id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}
