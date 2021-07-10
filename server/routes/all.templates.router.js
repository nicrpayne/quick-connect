const { response } = require("express");
const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/", (req, res) => {
  const queryText = `SELECT * FROM "templates" 
                    ORDER BY "id";`;

  pool
    .query(queryText)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});
module.exports = router;
