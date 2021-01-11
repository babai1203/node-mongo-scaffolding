import jwt from 'jsonwebtoken';

export function isLoggedin() {
    return function(req,res,next){
        const token = req.header('token');
        if(!token){
            return res.status(401).send({ message: 'Access forbidden.' });
        }
        try {
            const user = jwt.verify(token,process.env.TOKEN_SECRET);
            req.user = user;
            if(req.user.status != 'active') {
                return res.status(403).send({ message: 'Access forbidden.' });
            }
            next();
        } catch(err){
            console.log(err);
           return res.status(400).send({ message: 'Invalid session. Please login again.' });
        }
    }
}

export function hasRole(role) {
    if(!role) {
        throw new Error({ message: 'Required role needs to be set.' });
    }
    return function(req,res,next){
        isLoggedin();
        const token = req.header('token');
        if(!token){
            return res.status(401).send({ message: 'Access forbidden.' });
        }
        try {
            const user = jwt.verify(token,process.env.TOKEN_SECRET);
            req.user = user;
            if(req.user.status == 'active' && role.includes(req.user.role)) {
                next();
            } else {
                return res.status(401).send({ message: 'Access forbidden.' });
            }
            next();
        } catch(err){
            console.log(err);
           return res.status(400).send({ message: 'Invalid session. Please login again.' });
        }
    }
}