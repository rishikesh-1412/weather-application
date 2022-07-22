$(document).ready(function () {
    //$('#baricon').hide();
    $('#titlelist').hide();
    $('#hometitle').hide();
    $('#weathertitle').hide();
    $('#forecasttitle').hide();
    $('#developertitle').hide();
    $('#baricon').click(function () {
        $('#titlelist').show();
        $('#hometitle').slideToggle(500);
        $('#weathertitle').slideToggle(500);
        $('#forecasttitle').slideToggle(500);
        $('#developertitle').slideToggle(500);
    });

});

document.getElementById('homebtn').onclick=function(){
    location.href=('/')
}
document.getElementById("hometitle").onclick = function () {
    location.href = "/";
}

document.getElementById('weathertitle').onclick = function () {
    location.href = ('pune')
}
document.getElementById('weatherbtn').onclick = function () {
    location.href = ('pune')
}

document.getElementById('forecastbtn').onclick = function () {
    location.href = ('forecasting')
}
document.getElementById('forecasttitle').onclick = function () {
    location.href = ('forecasting')
}

var loader = document.getElementById("loading");

function loadFunc() {
    loader.style.display = "none";
    document.getElementById("yt1").style.display = "none";
    document.getElementById("yt2").style.display = "none";
    document.getElementById("yt3").style.display = "none";
}

//email send................

const nodemailer = require("nodemailer");

document.getElementById("send").onclick = function(){
    console.log('hey bro');
    // let testAccount = await nodemailer.createTestAccount();


    var transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'rishimung1412@gmail.com',
            pass:'rishi@1412'
        }
    });

    var mailOptions ={
        from:'rishimung1412@gmail.com',
        to:'mungaserishikesh@gmail.com',
        subject:'Bro Bro',
        text:'body of mail'
    }

    transporter.sendMail(mailOptions,function(err,info){
        if(err){
            console.log(err);
        }else{
            console.log('Email sent.'+info.response);
        }
    });


    // let info = await transporter.sendMail({
    //     from: "rishimung1412@gmail.com",
    //     to: "mungaserishikesh@gmail.com",
    //     subject: "Hello ✔",
    //     text: "Hello world?",
    //     html: "<b>Hello world?</b>",
    // });

    // console.log("Message sent: %s", info.messageId);

    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
// async function main() {
   
    // let testAccount = await nodemailer.createTestAccount();

   
    // let transporter = nodemailer.createTransport({
    //     host: "smtp.ethereal.email",
    //     port: 587,
    //     secure: false, 
    //     auth: {
    //         user: testAccount.user, 
    //         pass: testAccount.pass,
    //     },
    // });

   
    // let info = await transporter.sendMail({
    //     from: '"Fred Foo 👻" <foo@example.com>', 
    //     to: "bar@example.com, baz@example.com", 
    //     subject: "Hello ✔", 
    //     text: "Hello world?", 
    //     html: "<b>Hello world?</b>", 
    // });

    // console.log("Message sent: %s", info.messageId);
    

    
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
   
// }

// main().catch(console.error);