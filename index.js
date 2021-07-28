const express = require ('express');
const app = express();

// rendering static files
app.use('/static', express.static('public'))

// esj view - engine configuration
app.set('view engine', 'ejs')

// adding get response
app.get('/', (req, res)=>{
    res.render('todo.ejs')
    
})
app.listen(3000, ()=>console.log("Server up and running"));