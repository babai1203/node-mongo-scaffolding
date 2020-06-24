import config from './environment';
import bcrypt from 'bcryptjs';
import User from '../api/user/model';

export default async function initializeDB(req, res) {
    if(config.getConstants().seedDB) {
        try {
            //pre-populate data code
        } catch(e) {
            console.log(e);
        }
    }
}