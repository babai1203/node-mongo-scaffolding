import jwt from 'jsonwebtoken';
import config from '../../environment';
import { find_users } from '../../user/controller';

export function isLoggedin() {
    return async function(req,res,next){
        const token = req.header('token');
        if(!token){
            return res.status(401).send({ message: 'Access forbidden.' });
        }
        try {
            let user = jwt.verify(token,config.getConstants().token.secret);
            let get_query = {
                _id: user._id
            }
            let send_query = {
                status: 1,
                role: 1
            }
            user = await find_users(get_query,send_query);
            req.user = user[0];
            if(req.user.status != 'active') {
                return res.status(403).send({ message: 'Access forbidden.' });
            }
            next();
        } catch(e){
            console.log(e);
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
        if(role.includes(req.user.role)) {
            return next();
        } else {
            return res.status(403).send({ message: 'Access forbidden.' });
        }
    }
}