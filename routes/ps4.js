const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
const CONFIG = require('../configs/ps4API');

router.route('/ps4')
    .post(async (req, res, next) => {
        let result = await fetch(CONFIG.url + '?q=' + req.body.topic + CONFIG.key);
        let news = await result.json();
        res.render('news', {author: news.articles[0].author, title: news.articles[0].title, body: news.articles[0].description});
    })

module.exports = router;