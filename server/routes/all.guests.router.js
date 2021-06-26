const { response } = require('express');
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * This route *should* get all existing custom templates
 */
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
  
  console.log('in guests router post', newGuest)

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
         // Save the result so we can get the returned value
         const result = await connection.query(sqlAddGuest, newGuestQueryValues);
         // Get the id from the result - will have 1 row with the id 
         const newGuestId = result.rows[0].id;

         const sqlAddReservation = `INSERT INTO "reservation" 
         ("room_number", "start_time_stamp", "end_time_stamp", "guest_id",
         "company_id")
         VALUES ($1, $2, $3, $4, $5);`;
const reservationQueryValues = [
newGuest.room_number,
newGuest.start_time_stamp,
newGuest.end_time_stamp,
newGuestId,
newGuest.company_id
]
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



/**
 * Get all of the items on the shelf
 */
//  router.get('/', (req, res) => {
//   let queryText = `SELECT * FROM "item";`
//   pool.query(queryText)
//       .then((response) => {
//           res.send(response.rows)
//       }).catch((error) => {
//           res.sendStatus(500)
//       })
// });

/**
* Add an item for the logged in user to the shelf
*/
// router.post('/', (req, res) => {
//   console.log('in shelf router post', req.body, req.user);
//   let queryText = `
//                   INSERT INTO "item" ("description, "image_url", "user_id")
//                   VALUES ($1, $2, $3)     
//   `
//   pool.query(queryText, [req.body.description, req.body.url, req.user.id])
//       .then((response) => {
//           res.sendStatus(200)
//       }).catch((error) => {
//           res.sendStatus(500)
//       })
// });


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
router.put('/:id', (req, res) => {

});

/**
* Return all users along with the total number of items 
* they have added to the shelf
*/
router.get('/count', (req, res) => {

});

/**
* Return a specific item by id
*/
router.get('/:id', (req, res) => {

})

module.exports = router;


