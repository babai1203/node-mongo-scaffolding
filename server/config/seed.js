import config from './environment';
import bcrypt from 'bcryptjs';
import User from '../api/user/model';

export default async function initializeDB(req, res) {
    if(config.getConstants().seedDB) {
        try {
            //pre-populate admin
            let count = await User.find().countDocuments();
            if(count == 0) {
                const salt = await bcrypt.genSalt(10);
                const hashPassword = await bcrypt.hash('admin', salt);
                let user = await User.create({"mobile":"8904717023","name":"Souptik","email":"souptik.chatterjee7@gmail.com","role":"admin","password":hashPassword,"salt":salt,"status":"active"});
                console.log('Admin created');
            }
        } catch(e) {
            console.log(e);
        }
    }
}