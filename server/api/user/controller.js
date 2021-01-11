import User from './model';
import jwt from 'jsonwebtoken';
import config from '../../config/environment';

export async function register_new_user(req,res) {
    try {
        let post_body = {
            email: req.body.email,
            password: req.body.password,
            role: 'customer',
            status: 'active'
        };
        let user = await User.create(post_body);
        const token = jwt.sign({ _id: user._id }, config.getConstants().token.secret);
        return res.status(200).json({ token: token });
    } catch(e) {
        console.log(e);
        return res.status(400).json({ message: 'Technical error. Contact support.' });
    }
}