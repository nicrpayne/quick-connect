const { response } = require('express');
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


 router.get('/', (req, res) => {

  const queryText = `SELECT * FROM "companies"
                    ORDER BY "companies"."id";`

  pool.query(queryText)
      .then(response => {
          res.send(response.rows)
      }).catch(error => {
          res.sendStatus(500);
      })
})

router.post('/', async (req, res) => {
    const newCompany = req.body
 
    const connection = await pool.connect()
    { 
        try {
              await connection.query('BEGIN');
              const sqlAddCompany = `INSERT INTO "companies" 
                                      ("company_name", "company_city", "company_timezone")
                                      VALUES ($1, $2, $3)
                                      `
              const newCompanyQueryValues = [
                    newCompany.company_name,
                    newCompany.company_city,
                    newCompany.company_timezone
              ];
      
               const result = await connection.query(sqlAddCompany, newCompanyQueryValues);
    
      
               await connection.query('COMMIT');
               res.sendStatus(200);
    
           } catch (error) {
               await connection.query('ROLLBACK');
               res.sendStatus(500);
           } finally {
               connection.release()
           }


    }
  });
module.exports = router;

