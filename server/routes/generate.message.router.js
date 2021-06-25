const { response } = require('express');
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
    //variable is equal 
    let queryText = `SELECT * FROM "templates"
                        WHERE "id"=$1;`;


    console.log('in selected template.router GET', req.params.id)
    pool.query(queryText, [req.params.id])
        .then(result => {
            console.log(result.rows)
            res.send(result.rows)
        }).catch(error => {
            console.log('error in emotions GET', error)
            res.sendStatus(500);
        })
});
module.exports = router;