import mongoose from "mongoose";
const responseSchema= new mongoose.Schema({
    userID:{
        type:String,
    required:true
    },
    answer:{
        type:mongoose.Schema.Types.Mixed,//accepts all kind of data either string,number or etc
        required:true
    }
})

const questionSchema=new mongoose.Schema({
 type:{
        enum:['multiple_choice'],
        default:'multiple_choice',
        type:String,
        required:true
    },
    questionText:{
        type:String,
        required:true
    },
    options:{
        type:[String],
        required:true,
        validate:{
            validator:arr =>arr.length===3,
            message:'There should be 3'
        }
    },
    responses:[responseSchema],
    createdAt:{
    type:Date,
    default:Date.now
    }
})

const PresentationSchema= new mongoose.Schema({
title:{
type:String,
required:true
},
presenter:{
type:mongoose.Schema.Types.ObjectId,//helps to get the id of the user
ref:'User',
required:true
},
questions:[questionSchema],
isLive:{
    type:Boolean,
    default:false
},
code:{
    required:true,
    unique:true,
    type:String
},
createdAt:{
    type:Date,
    default:Date.now,
}

});


export default mongoose.models.Presentation || mongoose.model('Presentation',PresentationSchema)