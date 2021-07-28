const express = require ('express');
const app = express();


// adding get response
app.get('/', (req, res)=>{
    res.send('Hey you!')
    
})
app.listen(3000, ()=>console.log("Server up and running"));