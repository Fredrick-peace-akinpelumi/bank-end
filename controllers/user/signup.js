const userModel = require("../../model/userModels");

const userSignup = (req,res) => {
    console.log(req.body)
    const { firstname, lastname, email, phone_number, password } = req.body;
    const user = new userModel({firstname, lastname, email, phone_number, password});
    user.save((err=>{
        if(!err) {
            res.json({status: true, message:'Created successfully'});
        } else {
            res.json({status:false, message:err.message})
        }
    }))
}


const UserSignin=(req,res,next)=>{
    try{

        userModel.findOne({email:req.body.email},(err,result)=>{
            if(err){
                res.json({status:false, message:err.message})

            }else{
                if(result !==null){

                    res.json({status:true, user:result});
                }
                else{

                    res.json({status:false, });
                }
            }
        })

    }catch(ex){
        next(ex)
    }
}

module.exports = { userSignup ,UserSignin}