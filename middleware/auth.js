import jwt from 'jsonwebtoken';

const authMiddleware = (req,res,next) => {
    const token=req.headers.authorization?.split(' ')[1];
if(!token) return res.status(401).json({error:"missing token"})


    try {
        const user=jwt.verify(token,process.env.JWT_SEC)
        req.user=user;
        next();
        
    } catch (error) {
    res.status(402).json({error:"Invalid token"})
        
    }
}

export default authMiddleware
