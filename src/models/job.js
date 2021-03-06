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
  
  getJob: (name,company,limit,orderby,offset,mode) => {
    return new Promise((resolve,reject) => {

      let sql = 'SELECT j.id,j.name,j.description,c.id AS id_category,c.name AS category,j.salary,p.id AS id_company,p.name AS company,p.logo,p.location,p.description AS desc_company,j.date_added, j.date_updated FROM job j INNER JOIN category c ON j.id_category = c.id INNER JOIN company p ON j.id_company = p.id'

      if(name){
        sql  = sql + ` WHERE j.name LIKE '%${name}%' `;
      }else if(company){
        sql  = sql + ` WHERE p.name LIKE '%${company}%'`;
      }

		  if (orderby == 'name') {
        sql  = sql + ` ORDER BY j.name ASC`;  
		  } else if (orderby == 'category') {
        sql  = sql + ` ORDER BY p.name ASC`;
		  } else {
        sql  = sql + ` ORDER BY date_updated DESC`;
      }
      
      if(limit){
        sql  = sql + ` LIMIT ${limit}`;
      }if(offset){
        sql  = sql + ` OFFSET ${offset}`;
      }

      //offset buat mulainya dari mana misal ofset 5 mulai dari 6 dan seterusnya 
      //sesuai limitnya kalo limit itu batasannya

      // if(mode == 'asc' || mode == 'ASC'){ sql += `ASC`;}
      // if(mode == 'desc' || mode == 'DESC'){ sql += `DESC`;}

      conn.query(sql,(err,result) => {
        if(err){
          reject(new Error(err))
        }else {
          resolve(result)
        }
      })
    })
  },

  getJobById: (id) => {
    return new Promise((resolve,reject) => {

      let sql = 'SELECT j.id,j.name,j.description,c.id AS id_category,c.name AS category,j.salary,p.name AS company,p.logo,p.location,p.description AS desc_company,j.date_added, j.date_updated FROM job j INNER JOIN category c ON j.id_category = c.id INNER JOIN company p ON j.id_company = p.id'

      conn.query(sql, [id], (err,result) => {
        if(err){
          reject(new Error(err))
        }else {
          resolve(result)
        }
      })
    })
  },
  
  getTotalData: () => {
    return new Promise((resolve,reject) => {

      let sql = `SELECT COUNT(*) AS data FROM job`

      conn.query(sql, (err,result) => {
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

}
