var express = require('express');
var nodemailer = require("nodemailer");

// Toda a parte de email
// create reusable transport method (opens pool of SMTP connections)
var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Yahoo",
    auth: {
        user: "ftavares87@yahoo.com.br",
        pass: "r[]F1=8"
    }
});





// PARTE EXPRESS

var app = express();
app.use(express.bodyParser());


// Static files
app.use('/assets', express.static('assets'));

// Dir das views
app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');


app.get('/', function(req, res){
  res.render('index')
});

app.get('/edigar-e-diva', function(req, res){
  res.render('selecao__edigar-e-diva')
});

app.post('/api/selecoes', function(req, res){
    
    console.log(req.body.fotos);

    // var html = req.body;

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: "Fabrício Tavares <ftavares87@yahoo.com.br>", // sender address
        to: "fabriciotavareso@gmail.com", // list of receivers
        subject: "[um-a-um] Seleção de fotos de Edigar e Diva", // Subject line
        text: "Seleção de fotos", // plaintext body
        html: "Fotos selecionadas: <br><br> " + req.body.fotos + "<br><br> FIM" // html body
    }
    
        // send mail with defined transport object
    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error);
        } else{
            console.log("Message sent: " + response.message);
            res.send("Email enviado com sucesso")
        }
    
        // if you don't want to use this transport object anymore, uncomment following line
        //smtpTransport.close(); // shut down the connection pool, no more messages
    });
});

app.listen(3000);
console.log('Express started on port 3000');