import config from './environment';
import User from '../api/user/model';

export default async function initializeDB() {
    if(config.getConstants().seedDB) {
        try {
            let admin_count = await User.find({ role: 'admin' }).countDocuments();
            if(admin_count == 0) {
                let post_body = {
                    email: 'admin@product.com',
                    password: 'Admin@123456',
                    role: 'admin',
                    status: 'active'
                };
                await User.create(post_body);
                console.log('Admin created successfully.');
            }
        } catch(e) {
            console.log(e);
        }
    }
}