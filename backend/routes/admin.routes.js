const express = require("express");
const router = express.Router();

const db = require("../config/db");

router.post("/check", (req, res) => {
  const name = req.body.name;
  const Date = req.body.Date;
  console.log(name,Date);
  db.query("SELECT start_at ,end_at FROM calender WHERE name=? AND Date = ?",[name,Date], (err, results) => {
    if (err) {
      console.log(err);
    }
    res.send(results);
  });
});


router.get("/", (req, res) => {
    db.query("SELECT * FROM calender", (err, results) => {
      if (err) {
        console.log(err);
      }
      res.send(results);
    });
  });





router.post("/", (req, res) => {
    const name = req.body.name;
    const Date = req.body.Date;
    const start_at = req.body.start_at;
    const end_at = req.body.end_at;
    const task = req.body.task;
  
    db.query(
      " INSERT INTO calender (name,Date,start_at,end_at,task)VALUES (?,?,?,?,?);",
      [name,Date,start_at,end_at,task],
      (err, results) => {
        if (err) {
          console.log(err);
        }
       res.send(results);
       console.log(results);
      }
    );
  });  


router.put("/update", (req, res) => {
    const id = req.body.id;
    const start_at = req.body.start_at;
    const end_at = req.body.end_at;
    const task = req.body.task;
    db.query(
      "UPDATE employees SET start_at = ? AND end_at = ? AND task = ? WHERE id = ?",
      [start_at,end_at,task, id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

router.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM calender WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

module.exports = router;

