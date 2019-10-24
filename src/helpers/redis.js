const redis = require("redis");
const redis_url = 6000;
const client = redis.createClient();

client.on('connect', () => {
  console.log(` Redis client connected port ${redis_url} `)
})
  
client.on('error', (err) => {
  console.log('Redis ERROR = ' + err)
  client.quit();
})

module.exports = {
  getCached: (req, res, next) => {

    client.get(req.originalUrl,(err,result) =>{
      
      if(result != null){
        res.send({
          massage : "Success",
          result : JSON.parse(result)
        });
      }else{
        next();
      }
      
    })
},
  caching: (key, data) => {
    client.setex(key, 60, data)
  },
  delCache: (key) => {
    client.del(key)
  }
},
client