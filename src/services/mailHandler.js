const nodemailer = require("nodemailer");
const pug = require("pug");
const path = require('path');
require('dotenv').config();

class Email{
    constructor(data){
        this.data = data;
    }

    newTransporter(){
        // var transporter = nodemailer.createTransport({
        //     host: "smtp.mailtrap.io",
        //     port: 2525,
        //     auth: {
        //         user: process.env.MAIL_USER,
        //         pass: process.env.MAIL_PASS
        //     }
        //     });
        
        var transporter = nodemailer.createTransport({
            service: "sendgrid",
            auth: {
                user: process.env.SENDGRID_USER,
                pass: process.env.SENDGRID_PASS
            }
            });

        return transporter;
    }

    async sendMail(template, subject,...recipients){

        const client = this.data

        // 1) Render pug file
        const html = pug.renderFile(path.resolve(__dirname,'..','public','templates',`${template}.pug`),{
            client
        });
        
        // nodemailer
        //2) Email options
        var mailOptions = {
            from: "Renouveler - <renouveler.design@gmail.com>",
            to: recipients,
            subject,
            html,
        }

        //3) Wrap-up and send the e-mail
        await this.newTransporter().sendMail(mailOptions);
    }

    async sendInfo(){
        await this.sendMail("form","Renouveler Design - Informações de formulário",['renouveler.design@gmail.com']);
    }

    async greetings(){
        await this.sendMail("greetings","Renouveler Design - Obrigado!!",[`${this.data.email}`]);
    }

    async sendQuiz(){
        await this.sendMail("quiz",`Renouveler - Informações do quiz - ${this.data.name}`)
    }

}


module.exports = Email