const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
const CONFIG = require('../configs/ps7API');

const redis = require('redis');
const client = redis.createClient();

router.route('/news')
  .get(async (req, res) => {
    console.log("Calling url: " + CONFIG.url + '?q=\'' + req.query.topic + '\'' + CONFIG.key)
    let results = await fetch(CONFIG.url + '?q=' + encodeURIComponent(req.query.topic) + CONFIG.key)
      // .catch(() => console.log("Can’t access " + CONFIG.url + " response. Blocked by browser?"));
    let news = await results.json();
    const redisKey = JSON.stringify(news);
    client.exists(redisKey, (err, match) => {
      if (match) {
        console.log(news.articles);

        res.json({
          author: news.articles[0].author,
          title: news.articles[0].title,
          description: news.articles[0].description,
          cache: true
        })
      } else {
        client.set(JSON.stringify(news), JSON.stringify(news));
        client.expire(JSON.stringify(news), 30);

        console.log(news.articles);

          res.json({
          author: news.articles[0].author,
          title: news.articles[0].title,
          description: news.articles[0].description,
          cache: false
        })
      }
    })
  })


module.exports = router;
