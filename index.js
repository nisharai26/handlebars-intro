const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const getPerson = require('./lib/person');
const app = express();

app.use(express.static(path.join(__dirname, 'public'))); 
app.engine('hbs',hbs({
    extname:'.hbs'
}));
app.set('view engine','.hbs');
app.get('/',(req,res)=>{
    let data=getPerson();
    
    res.render('index',{data});
});
app.get('/about',(req,res)=>{
    res.render('about');
});
// app.get('*',(req,res)=>{
//     res.render('404');
// });
// app.use((req, res) => {
//     res.render('404');
//     })
    
    
app.use((req, res) => {
    res.status(404).send("Sorry can't find that!")
    });
    
    
app.listen(3000,()=>{
    console.log("Listening to port 3000");
});
