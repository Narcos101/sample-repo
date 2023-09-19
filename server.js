const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')
const app = express();
const port = process.env.PORT || 5000;


mongoose.connect('mongodb://0.0.0.0/forms',{ useNewUrlParser:true })

const db = mongoose.connection
db.on('error',(error) => console.error(error))
db.once('open',()=>console.log("Connected to Database"))
// Middleware
app.use(bodyParser.json());
app.use(cors());
// Routes
// Define your API routes here

const formsRouter = require('./routes/forms')

app.use('/forms', formsRouter)


// app.get('/forms',(req,res)=>{
//     res.redirect('/')
// })

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});