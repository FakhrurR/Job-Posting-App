const conn = require('../configs/db')

module.exports = {
  signupUser: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO user SET ?', [data], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  loginUser: (username,password) => {
    
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM user WHERE username = ? AND password = ?', [username,password], (err, result) => {
        
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  getUser: (data) => {
    return new Promise((resolve,reject) => {
      conn.query('SELECT * FROM user', data, (err,result) => {
        if(err){
          reject(new Error(err))
        }else {
          resolve(result)
        }
      })
    })
  },

  getUserById: (id) => {
    return new Promise((resolve,reject) => {
      conn.query('SELECT id,username,email FROM user WHERE id = ?', [id], (err,result) => {
        if(err){
          reject(new Error(err))
        }else {
          resolve(result)
        }
      })
    })
  },
  
  getAllUser: (data) => {
    return new Promise((resolve,reject) => {
      conn.query('SELECT id,username,email FROM user', data, (err,result) => {
        if(err){
          reject(new Error(err))
        }else {
          resolve(result)
        }
      })
    })
  },

  updateUser: (data,id) => {
    return new Promise((resolve, reject) => {
      conn.query('UPDATE user SET ? WHERE id=?', [data,id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteUser: (id) => {
    return new Promise((resolve, reject) => {
      conn.query('DELETE FROM user WHERE id=?', [id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}
