import jwt from 'jsonwebtoken';
import { find_users } from '../../user/controller';

export async function my_details(req, res) {
    try {
        let get_query = {
            "_id": req.user._id
        };
        let send_query = {
            customerID: 1,
            firstName: 1,
            mobile: 1,
            email: 1,
            role: 1,
            firstTime: 1
        };
        let users = await find_users(get_query,send_query);
        if(users.length == 0) return res.status(400).json({ message: 'Technical error.'});
        return res.status(200).json(users[0]);
    } catch(e) {
        console.log(e);
        return res.status(400).json({ message: 'Technical error.'});
    }
}