//rename the exported variable from db.js "bookshelf" to "db"
import db from '../db.js';

class CountryPagesContent extends db.Model {  
    get tableName() {
        return 'country_pages_content';
    }

    get hasTimestamps() {
        return true;
    }
}

module.exports = CountryPagesContent;