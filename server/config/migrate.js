import config from './environment';

export default async function migrateDB() {
    if(config.getConstants().migrateDB) {
        try {
            //pre-populate data code
        } catch(e) {
            console.log(e);
        }
    }
}