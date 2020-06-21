const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
const CONFIG = require('../configs/ps4API');

const redis = require('redis');
const client = redis.createClient();

router.route('/ps4')
    .post(async (req, res, next) => {
        let results = await fetch(CONFIG.url + '?q=' + req.body.topic + CONFIG.key);
        let news = await results.json();
        const redisKey = JSON.stringify(news);
        client.exists(redisKey, (err, match) => {
            if (match) {
                res.json({
                    result: news.articles[0].author + news.articles[0].title + news.articles[0].description,
                    cache: true
                })
            } else {
                client.set(JSON.stringify(news), JSON.stringify(news));
                client.expire(JSON.stringify(news), 30);
                res.json({
                    result: news.articles[0].author + news.articles[0].title + news.articles[0].description,
                    cache: false
                })
            }
        })
    })



module.exports = router;
