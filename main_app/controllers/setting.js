import jwt from 'jsonwebtoken';
import { find_setting } from '../../setting/controller';

export async function get_constants(req, res) {
    try {
        let get_query = {};
        let send_query = {
            tax: 1,
            GSTIN: 1,
            latestVersion: 1
        };
        let setting = await find_setting(get_query,send_query);
        if(setting.length == 0) return res.status(400).json({ message: 'Technical error.'});
        return res.status(200).json(setting);
    } catch(e) {
        console.log(e);
        return res.status(400).json({ message: 'Technical error.'});
    }
}