const express = require ('express');
const app = express();
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const session = require('express-session')


const PORT = process.env.PORT
const mongodbURI = process.env.MONGODBURI


app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname,'build')));

app.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false
    })
)

const userController = require('./build/controllers/users')
app.use('/users', userController)

const sessionsController = require('./build/controllers/sessions')
app.use('/sessions', sessionsController)


//Put ROUTES here
app.get('/fortunes/new', (req, res)=>{
    res.send('new');
});

//catch all
app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname, 'build','index.html'));
})

app.listen(PORT, function() {
    console.log(`Express app running on port ${PORT}`)
});