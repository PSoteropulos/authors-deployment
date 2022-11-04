const mongoose = require('mongoose')
db = 'authors'

mongoose.connect(`mongodb://localhost/${db}`, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(( ) => {
    console.log(`Connected to ${db} DB`)
}).catch((err) => {
    console.log(err)
})