const { response } = require('express');
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


 router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "guests"
                    JOIN "reservation" ON "guests".id = 
                    "reservation".guest_id 
                    ORDER BY "guests".id;`

  pool.query(queryText)
      .then(response => {
          res.send(response.rows)
          console.log('BROOOO GUESTS', response.rows);
      }).catch(error => {
          console.log('error in guests GET', error)
          res.sendStatus(500);
      })
})


router.post('/', async (req, res) => {
  const newGuest = req.body


  const connection = await pool.connect()

  try {
        await connection.query('BEGIN');
        const sqlAddGuest = `INSERT INTO "guests" 
                                ("first_name", "last_name", "mobile", "email")
                                VALUES ($1, $2, $3, $4)
                                RETURNING guests.id;`
        const newGuestQueryValues = [
              newGuest.firstName,
              newGuest.lastName,
              newGuest.mobile,
              newGuest.email
        ];
         // Save the result to get the returned value
         const result = await connection.query(sqlAddGuest, newGuestQueryValues);
         // Get the id from the result - will have 1 row with the id 
         const newGuestId = result.rows[0].id;

         const sqlAddReservation = `INSERT INTO "reservation" 
                                    ("room_number", "start_time_stamp", "end_time_stamp", "guest_id", "company_id")
                                    VALUES ($1, $2, $3, $4, $5);`;
const reservationQueryValues = [
newGuest.room_number,
newGuest.start_time_stamp,
newGuest.end_time_stamp,
newGuestId,
newGuest.company_id
];
console.log('in guests Post', reservationQueryValues)
await connection.query(sqlAddReservation, reservationQueryValues);


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



// router.delete('/:id', rejectUnauthenticated, (req, res) => {
//   console.log('help!!', req.params.id);
//   let id = req.params.id;
//   let queryText = `DELETE FROM "item" 
//                   WHERE "id" = $1`;
//   pool.query(queryText, [id])
//       .then(result => {
//           res.sendStatus(201);
//       })
//       .catch(error => {
//           console.log('ERROR IN / DELETE', error);
//           res.sendStatus(500);
//       });
// });

/**
* Update an item if it's something the logged in user added
*/
// router.put('/:id', (req, res) => {});