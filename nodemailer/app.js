const nodemailer = require("nodemailer");

var transfer = nodemailer.createTransport({
    service: "outlook", // gonderen mailin kullandığı servis.
    auth: {// gonderen kisinin mail bilgileri
        user: "mesutdede@outlook.com",
        pass: "eM!!2345@"
    }
});

var mail_packet = {
    from: "mesutdede@outlook.com",
    to: "mesutdede@gmail.com, mesutdede@yaani.com",
    subject: "NodeJs Mail Test",
    text: "Nodejs ilk mail.",
    html: "<h1>Html içerik gönderiyorum</h1>"// alternate
};

transfer.sendMail(mail_packet, function(err){
    if(err) console.log(err);
    else console.log("Mail gönderildi."); 
});