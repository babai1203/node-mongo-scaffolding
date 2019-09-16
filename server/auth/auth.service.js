import jwt from 'jsonwebtoken';

export function isLoggedin() {
    return function(req,res, next){
        const token = req.header('token');
        if(!token){
            return res.status(401).send('Access forbidden.');
        }
        try {
            const user = jwt.verify(token,process.env.TOKEN_SECRET);
            req.user = user;
            if(user.status != 'active') {
                return res.status(403).send('Access forbidden.');
            }
            next()
        } catch(err){
           return res.status(400).send('Invalid session. Please login again.');
        }
    }
}


export function hasRole(role) {
    if(!role) {
        throw new Error('Required role needs to be set.');
    }
    return function(req,res,next){
        isLoggedin();
        if(role == req.user.role) {
            return next();
        } else {
            return res.status(403).send("Access forbidden.");
        }
    }
}