const User = require('../model/userSchema');

const Email = require('../services/mailHandler');

exports.index = async(req,res)=>{
    const clients  = await User.find();

    return res.status(200).json({
        status:'Success',
        data:clients
    });
}
exports.find = async(req,res)=>{
    const id = req.params;

    const client = await User.findById(id);

    if(!client){
        res.status(404).json({
            status:'unsuccessful',
            data:'No client found with this id'
        })
    }

    res.status(200).json({
        status:'success',
        data:client
    });
}
exports.create = async(req,res,next)=>{
    // const{ name,email,phone,fullDate:date,message, tag, color, favoritePlace, eventStyle} = req.body;
    const data = req.body;
    try{
        // Save data into DB
        const client = await User.create({
            name:data.name,
            email:data.email,
            phone:data.phone,
            createdAt:Date.now()});
        
        res.status(200).json({
            status:'success',
            data: client
        })
        next();
    }
    catch(err){
        console.log(err);
        next();
    }
}

exports.sendMail = async(req,res,next)=>{
    const data = req.body;

    const email = new Email(data);

    try{
    //Sending e-mails
    await email.greetings();
    await email.sendInfo();
    
    res.status(200).json({
        status:'E-mails sent!!'
    })
    next();
    }
    catch(err){
        console.log(err);
    next();
    }
}
exports.update = async(req,res)=>{
    const id   = req.params;
    const data = req.body;

    try{
        await User.findByIdAndUpdate(id,data);

        return res.status(200).json({
            status:'Success',
            data:'user was updated'
        })
    }
    catch(err){
        console.log(err);

        return res.status(501).json({
            status:'Unsuccessful'
        })
    }
       
}
exports.remove = async(req,res)=>{
    const id = req.params;

    await User.findByIdAndDelete(id);

    return res.status(200).json({
        status:'Success'
    })
}