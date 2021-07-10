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
      }).catch(error => {
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
         const result = await connection.query(sqlAddGuest, newGuestQueryValues);
         const newGuestId = result.rows[0].id;

         const sqlAddReservation = `INSERT INTO "reservation" 
                                    ("start_time_stamp", "end_time_stamp", "guest_id", "company_id")
                                    VALUES ($1, $2, $3, $4)
                                    RETURNING reservation.room_number;`;
const reservationQueryValues = [
newGuest.start_time_stamp,
newGuest.end_time_stamp,
newGuestId,
newGuest.companyId
];
await connection.query(sqlAddReservation, reservationQueryValues);

         await connection.query('COMMIT');
         res.sendStatus(200);
     } catch (error) {
         await connection.query('ROLLBACK');
         res.sendStatus(500);
     } finally {
         connection.release()
     }
});


module.exports = router;