const Question = require('../models/question');

//render home 
module.exports.home = (req,res)=>{
    // console.log(req.url);
    Question.find({})
    .populate({
                path:'options',
                populate:{
                    path:'question'
                }
            })
    .then((question)=>{
        // return res.status(200).json({
        //     data:question
        // })
        return res.render('home',{
            questions:question
        })

    }).catch((err)=>{
        if(err){
            return res.status(500).json({
                message:"Internal Server Error"
            })
            // return console.log("Error in finding questions in home rendering");
        }
    })
}

module.exports.questionPage = (req,res)=>{
    return res.render('createQuestion');
}