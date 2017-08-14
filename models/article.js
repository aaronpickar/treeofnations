//rename the exported variable from db.js "bookshelf" to "db"
import db from '../db.js';

class Article extends db.Model {  
    get tableName() {
        return 'articles';
    }

    get hasTimestamps() {
        return true;
    }

    static findByHtmlRef(article_htmlref) {
        //SELECT * FROM countries where id = country_id
       return this.forge().query({where:{ html_ref : article_htmlref }}).fetch();
    }
}

module.exports = Article;