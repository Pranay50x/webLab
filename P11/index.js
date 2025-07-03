const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  multipleStatements: true,
});

db.connect((err) => {
  if (err) throw err;
  let setup = `create database if not exists student;
    use student;
    `;

  db.query(setup, (err) => {
    if (err) throw err;
    let createQuery = `create table if not exists stud(
      id int auto_increment primary key,
      name varchar(250),
      age int
      );
      truncate stud;
      insert into stud (name,age) values ('Alex', 30), ('Jason', 21);`;

    db.query(createQuery, (err) => {
      if (err) throw err;
      db.query(`select * from stud`, (err, rows) => {
        if (err) throw err;
        console.table(rows);

        db.query(
          "update stud set name=? where name=?;",
          ["Alexander", "Alex"],
          (err) => {
            if (err) throw err;
            db.query("select * from stud;", (err, frows) => {
              if (err) throw err;
              console.table(frows);
              db.query("delete from stud where name=?;", ["Jason"], (err) => {
                if (err) throw err;
                db.query("select * from stud", (err, fr) => {
                  if (err) throw err;
                  console.table(fr);
                });
              });
            });
          },
        );
      });
    });
  });
});
