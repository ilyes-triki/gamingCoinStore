const express = require('express');
const cors = require('cors');

require('dotenv').config();

const connectDB = require('./config/DBconfig');
// consts
const app = express();

//  DB connection

connectDB();
//routes
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use(express.json());
app.use('/user', require('./routes/userRoutes'));

// serv

let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
