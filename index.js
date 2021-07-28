const express = require ('express');
const app = express();

// rendering static files
app.use('/static', express.static('public'));
app.use(express.urlencoded({extended: true}));

// esj view - engine configuration
app.set("view engine","ejs");

// adding get method
app.get('/', (req, res)=>{
    res.render('todo.ejs')
    
})

// post method
app.post('/', (req,res)=>{
    console.log(req.body);
})
app.listen(3000, ()=>console.log("Server up and running"));