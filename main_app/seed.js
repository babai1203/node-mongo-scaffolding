import config from '../environment';
import { find_users, create_user } from '../user/controller';

export default async function initializeDB() {
    if(config.getConstants().seedDB) {
        try {
            //pre-populate admin
            let query = {
                "role": "main_admin"
            };
            let count = await find_users(query);
            if(count == 0) {
                let post_body = {
                    "customerID": "ADMIN",
                    "firstName": "Admin",
                    "mobile": "9513099000",
                    "email": "admin@pasto.in",
                    "role": "main_admin",
                    "referralCodes": [{"value":1000,"code":"ADMINISGOD","active":true},{"value":500,"code":"MOM500","active":true},{"value":100,"code":"MOM100","active":true},{"value":1000,"code":"SOUPREF","active":true},{"value":150,"code":"GREXTER","active":true},{"value":100,"code":"NSP100","active":true},{"value":150,"code":"FEEDBACK150","active":true},{"value":2020,"code":"HNY2020","active":true}],
                    "status": "active"
                };
                create_user(post_body);
                console.log('Main admin added.');
            }
            // //pre-populate settings
            // query = {};
            // count = find_setting(query);
            // if(count == 0) {
            //     let post_body = {
            //         "subscriptionNumber": "SUB301",
            //         "orderNumber": "ORD301",
            //         "customerID": "C301",
            //         "tax": 5,
            //         "GSTIN": "29AAFCE4741E1ZP",
            //         "latestVersion": "3.0.0"
            //     };
            //     create_setting(post_body);
            //     console.log('Global constants added.');
            // }
        } catch(e) {
            console.log(e);
        }
    }
}