//rename the exported variable from db.js "bookshelf" to "db"
import db from '../db.js';

class CountryPages extends db.Model {  
    get tableName() {
        return 'country_pages';
    }

    get hasTimestamps() {
        return true;
    }
}

module.exports = CountryPages;