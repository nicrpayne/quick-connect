const { response } = require('express');
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/:id', (req, res) => {
    let queryText = `SELECT * FROM "templates"
                        WHERE "id"=$1;`;

    pool.query(queryText, [req.params.id])
        .then(result => {
            res.send(result.rows)
        }).catch(error => {
            res.sendStatus(500);
        })
});
module.exports = router;