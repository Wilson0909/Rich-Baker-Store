const express = require('express') // buat variable express panggil library express
const app = express() // buat variable app panggil express
const cors= require('cors'); //menginstal middleware yang memungkinkan aplikasi Anda menangani permintaan dari domain atau asal (origin) yang berbeda.

app.use(express.json());
app.use(cors());

const db = require ('./models');

const mysql = require('mysql2');

//Routers
const postRouter= require('./routes/Posts')
app.use("/posts",postRouter)


const commmentRouter= require('./routes/Comments')
app.use("/comments",commmentRouter)

const usersRouter= require('./routes/Users')
app.use("/auth",usersRouter)

//buat link anggap ini kayak start awal untuk start api
db.sequelize.sync().then(()=>{
    app.listen(3001,()=>{
        console.log("Server running on port 3001");
    }) // harus beda portnya sama dijalankan react
    




    // connection.connect((err) => {
    //     if (err) {
    //       console.error('Database connection failed:', err.stack);
    //       return;
    //     }
    //     console.log('Connected to database.');
    //   });
})

