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
      conn.query('SELECT j.id,j.name,j.description, c.name AS category,j.salary,p.name AS company,j.date_added, j.date_updated FROM job j INNER JOIN category c ON j.id_category = c.id INNER JOIN company p ON j.id_company = p.id ', data, (err,result) => {
        if(err){
          reject(new Error(err))
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
  },

  searchJob:(name,company) =>{
    return new Promise((resolve, reject) => {
      // console.log(name)
      const search = [];
			(typeof name !== 'undefined' ? search.push(`j.name like '%${name}%'`) : '');
			(typeof company !== 'undefined' ? search.push(`p.name like '%${company}%'`) : '');
      console.log(company)
      const yield = search.join(' OR ');
    
      const sql = `SELECT j.id,j.name,j.description, c.name AS category,j.salary,p.name AS company,j.date_added, j.date_updated FROM job j INNER JOIN category c ON j.id_category = c.id INNER JOIN company p ON j.id_company = p.id WHERE ${yield}`
      
      conn.query(sql,[name,company],(err,result) => {
        if(!err){
          resolve(result)
        }else{
          reject(new Error(err))
        }
      })  
    })
  }

}
