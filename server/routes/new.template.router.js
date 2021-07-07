const { response } = require('express');
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.post('/', async (req, res) => {
  const newTemplate = req.body
  
  console.log('in template router post', newTemplate)

  const connection = await pool.connect()

  try {
        await connection.query('BEGIN');
        const sqlAddTemplate = `INSERT INTO "templates" 
                                ("template_name", "template_body")
                                VALUES ($1, $2)
                                RETURNING templates_id;`
        const newTemplateQueryValues = [
              newTemplate.name,
              newTemplate.body
        ];

         const result = await connection.query(sqlAddTemplate, newTemplateQueryValues);

         const newTemplateId = result.rows[0].id;

         await connection.query('COMMIT');
         res.sendStatus(200);
     } catch (error) {
         await connection.query('ROLLBACK');
         console.log(`Transaction Error - Rolling back new account`, error);
         res.sendStatus(500);
     } finally {
         connection.release()
     }
});

module.exports = router;

