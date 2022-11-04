const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors({
    origin: 'http://localhost:3000'
}));

// Middleware (for formatting and allowing POST request)
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// VERY IMPORTANT!!! THESE MUST GO AFTER MIDDLEWARE!!!!
require('./config/mongoose.config');
require('./routes/author.routes')(app);

app.listen(PORT, ( ) => {
    console.log(`Server is up on port ${PORT}`)
})