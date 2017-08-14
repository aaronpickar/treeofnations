//rename the exported variable from db.js "bookshelf" to "db"
import db from '../db.js';
// import model to be used to relate database tables
import CountryPagesContent from './countrypagescontent.js'
import CountryPages from './countrypages.js'

class Country extends db.Model {  
    //grabs the countries table from database
    get tableName() {
        return 'countries';
    }

    get hasTimestamps() {
        return true;
    }

    pageContent(){
        //only use .fetchAll when array is >1 else use .fetch
        return CountryPagesContent.forge().where({country_id: this.get('id')}).fetchAll();
    }

    pageDescription(){
        return CountryPages.forge().where({country_id: this.get('id')}).fetch();
    }

    static findByHtmlRef(country_htmlref) {
        //SELECT * FROM countries where name = country_name
       return this.forge().query({where:{ html_ref : country_htmlref }}).fetch();
    }
}
//export class for use in controller
module.exports = Country;