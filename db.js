import initKnex from 'knex';
import initBookshelf from 'bookshelf';
import dotenv from 'dotenv';
dotenv.config();

//pass environment variables from .env file to database for login
var database_config = {
	"host": process.env.DB_HOST,
	"user": process.env.DB_USER,
	"password": process.env.DB_PASS,
	"database": process.env.DB_NAME
}

// console.log(database_config);

//use frameworks for simplified database functions
var knex = initKnex({client: 'mysql', connection: database_config, debug: true});
var bookshelf = initBookshelf(knex, {debug: true});

module.exports = bookshelf;
