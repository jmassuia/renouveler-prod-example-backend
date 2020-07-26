const connection = require('../database/connection');
const transporter = require('../services/nodeMailer');

module.exports={
    async store(req,res){
        const{name,email,phone,fullDate:date,message, tag, color, favoritePlace, eventStyle} = req.body;

     /*   
        const [client] = await connection('clients').insert({
            name,
            email,
            phone,
            date
        });*/


        var mailInfo = {
                from: "Renouveler - <massuia1507@gmail.com>",
                to: ['j0a0massuia19@gmail.com','renouveler.design@gmail.com'],
                subject:'Renouveler - Fale Conosco!',
                template: 'index',
                context:{
                    name:name,
                    mail:email,
                    phone:phone,
                    message:message,
                    tag:tag,
                    color:color,
                    favoritePlace:favoritePlace,
                    eventStyle:eventStyle
                }
        }
        
            transporter.sendMail(mailInfo,function(error,info){
            if(error){
                console.log(error)
                return res.json(error);
                
            }
            else{
                console.log(info.response)
                return res.json({'Email sent: ': info.response});
            }
            });
    }
}