const express = require('express');
const router = express.Router();

router.route('/ps3')
    .get((req, res, next) => {
        let fixedString = 'This is part B of ps3';
        res.render('ps3',
            {
                string : fixedString
            });
    })
    .post((req, res, next) => {
        const json =  {
            string: req.body.newString,
            length: req.body.newString.length
        }
        res.render('ps3c', {
            json: json
        });
    })
module.exports = router;