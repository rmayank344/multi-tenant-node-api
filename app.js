const express = require('express');
const app = express();
require('dotenv').config();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/api/user', require('./routes/user_routes'));


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});