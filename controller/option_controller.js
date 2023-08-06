const Option = require('../models/option');
const Question = require('../models/question');

// module.exports.optionPage = (req,res)=>{
    
//     return res.render('createOption',{
//         id:req.params.id
//     });
// }


//create options
module.exports.create = (req,res)=>{

    Question.findById(req.body.question).then((question)=>{
        if(!question){
            return res.redirect('back');
        }else{
            Option.create(req.body).then((option)=>{
                question.options.push(option);
                question.save();
                // return res.redirect('back');
                return res.status(200).json({
                    message:"Option created successfully!",
                })
            }).catch((err)=>{
                return res.status(500).json({
                    message:"Internal Server Error"
                })
                // return console.log("Error in creating option");
            })
        }
    }).catch((err)=>{
        // return console.log("Error in finding the questions in option ");
        return res.status(500).json({
            message:"Internal Server Error"
        })
    })

    
};

//delete options

module.exports.delete = (req,res)=>{
    Option.findById(req.params.id).then((option)=>{
        let questionId = option.question;
        option.deleteOne();
        Question.findByIdAndUpdate(questionId,{$pull:{options:req.params.id}}).then(()=>{
            return res.status(200).json({
                message:"Option deleted Successfully"
            })
        }).catch((err)=>{
            return res.status(500).json({
                message:"Internal Server Error"
            })
        })
    }).catch((err)=>{
        return res.status(500).json({
            message:"Internal Server Error"
        })
        // return console.log("Error in deleting option");
    })
}


//add vote to options
module.exports.addVote = (req,res)=>{
    Option.findById(req.params.id).then((option)=>{
        option.votes = option.votes+1;
        option.save();
        return res.status(200).json({
            message:"Vote Added!"
        })
        // return res.redirect('back');
    }).catch((err)=>{
        // return console.log("Error in update the count",err);
        return res.status(500).json({
            message:"Internal Server Error"
        })
    })
}