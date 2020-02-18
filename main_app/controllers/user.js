import jwt from 'jsonwebtoken';
import { find_users } from '../../user/controller';

export async function my_details(req, res) {
    try {
        let query = {
            "_id": req.user._id
        };
        let users = await find_users(query);
        if(users.length == 0) return res.status(400).json({ message: 'Technical error.'});
        return res.status(200).json(users[0]);
    } catch(e) {
        console.log(e);
        return res.status(400).json({ message: 'Technical error.'});
    }
}