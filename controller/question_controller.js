const Question = require('../models/question');
const Option = require('../models/option');


//create questions
module.exports.create = (req,res)=>{
    Question.create(req.body).then((question)=>{
        return res.status(200).json({
            message:"question create successfully",
        })
    }).catch((err)=>{
        return res.status(500).json({
            message:"Internal Error"
        })
        // return console.log("Error in creating question");
    })
};

//delete question
module.exports.delete = (req,res)=>{
    Question.findById(req.params.id).then((question)=>{
        question.deleteOne();
        Option.deleteMany({question:req.params.id}).then(()=>{
            return res.status(200).json({
                message:"Question deleted Successfully"
            })
            // return res.redirect('back');
        }).catch((err)=>{
            return res.status(500).json({
                message:"Internal Server Error"
            })
            // return console.log("Error in delete many options",err);
        })
    }).catch((err)=>{
        return res.status(500).json({
            message:"Internal Server Error"
        })
        // return console.log("error in deleting question")
    })
}