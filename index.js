const express = require ('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// require model
const TodoTask = require('./models/TodoTask');

dotenv.config();





// rendering static files
app.use('/static', express.static('public'));
app.use(express.urlencoded({extended: true}));

// esj view - engine configuration
app.set("view engine","ejs");

// adding get method
app.get('/', (req, res)=>{
    res.render('todo.ejs')
    
});

// post method
app.post('/',async (req,res)=>{
    const todoTask = new TodoTask({
        content: req.body.content
    });
    try{ 
        await todoTask.save();
        res.redirect("/");
    }catch(err){
        res.redirect("/");
    }
});

// connection to db
mongoose.set("useFindAndModify", false );
mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true}, 
    ()=>{
    console.log("Connected to db")
    
    app.listen(3000, ()=>console.log("Server up and running"));

});
