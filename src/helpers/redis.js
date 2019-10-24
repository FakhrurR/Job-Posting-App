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

    let page = 1;
    if(req.query.page != null){
      page = req.query.page;
    }

    let {name,orderby,company,limit} = req.query;

    let redis_key = '';
    if(name){ redis_key = redis_key + name }
    if(company){ redis_key = redis_key + company }

    client.get(redis_key,(err,result) =>{
      
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
    client.setex(key, 30, JSON.stringify(data) )
  },
  delCache: (key) => {
    client.del(key)
  }
}
client