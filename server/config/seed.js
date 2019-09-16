import config from './environment';

export default async function initializeDB(req, res) {
    if(config.typeOfProd().seedDB) {
        try {
            //pre-populate data
        } catch(e) {
            console.log(e);
        }
    }
}