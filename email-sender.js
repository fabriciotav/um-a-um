var nodemailer = require("nodemailer");

// create reusable transport method (opens pool of SMTP connections)
var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Yahoo",
    auth: {
        user: "ftavares87@yahoo.com.br",
        pass: "r[]F1=8"
    }
});

// setup e-mail data with unicode symbols
var mailOptions = {
    from: "Fabrício Tavares <ftavares87@yahoo.com.br>", // sender address
    to: "fabriciotavareso@gmail.com", // list of receivers
    subject: "'Sup! Hello world, from node.js =)", // Subject line
    text: "Hello world, from node.js =)", // plaintext body
    html: 'Até com HTML! Saca esse <b style="font-size: 30px">bold font-size 30px!</b><br><br><small>Já to voltando pros estudos, só queria testar uma idéia, hehe</small>' // html body
}

// send mail with defined transport object
smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
    }

    // if you don't want to use this transport object anymore, uncomment following line
    //smtpTransport.close(); // shut down the connection pool, no more messages
});