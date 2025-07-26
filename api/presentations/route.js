import express from 'express'
import authMiddleware from '@/middleware/auth'
import Presentation from '@/models/presentation';

const router=express.Router();
async function generatecode(length = 4){
    const char='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code='';
    for(let i=0;i<length;i++){
    code +=char.charAt(Math.floor(Math.random()*char.length));
    }
     const exists = await Presentation.findOne({ code });
    if(exists){
    return generatecode(length);
    }
    else{
    return code;
    }
}

//post presentations api
router.post('/',authMiddleware, async(req,res)=>{

    try {
        const {title}=req.body;

        if(!title)return res.status(400).json({message:"title not defined"});

        const newPresentation=new Presentation({
            title,
            presenter:req.user.id,
            questions:[{
                type:'multiple_choice',
                questionText:"Write the question here",
                options:["option A","option B","option C"],

            }],
            code:await generatecode(),
        }) 
        await newPresentation.save();
        res.status(200).json({newPresentation})


    } catch (error) {
        res.status(500).json({message:"Server error"})
    }

})

//get single presentation with the :id 
router.get('/:id',authMiddleware,async(req,res)=>{
    const { id }= req.params;

    if(!id.match(/^[0-9a-fA-F]{24}$/)){
        return res.status(400).json({message:"Invalid request"});
    }
try {
    //replaces the _id with _id: ,Name: ,email:
    const presentation=await Presentation.findById(id).populate('presenter','name email'); 
    if(!presentation){
        return res.status(404).json({message:"Presentation not found"});
    }
    return res.status(200).send(presentation)
} catch (error) {
    return res.status(500).json({message:"Server errror"});
}

})


//get the presentation code to join for join session
router.get('/code/:code',async(req,res)=>{
    const code=req.params;
    try {
        
        const presentation=await Presentation.findOne({code}).select('-questions.responses');
    
         if(!presentation){
            return res.status(404).json({message:"Presentation not found"});
        }
        return res.status(200).json({presentation})
    } catch (error) {
        return res.status(500).json({message:"Server error"})
    }
})