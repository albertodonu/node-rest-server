const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('./config/config');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get('/usuario', function(req, res) {
    res.json('get usuario');
});

app.post('/usuario', function(req, res) {
    let body = req.body;

    // res.json({
    //     pesona: body
    // });

    if (body.nombre === undefined) {
        res.status(400).json({
            status: 1,
            message: `El nombre es necesario`
        });
    } else {
        res.json({
            pesona: body
        });
    }

});

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json({ id });
});

app.delete('/usuario', function(req, res) {
    res.json('delete usuario');
});


app.listen(process.env.PORT, () => { console.log(`Escuchando el puerto ${process.env.PORT}`); })