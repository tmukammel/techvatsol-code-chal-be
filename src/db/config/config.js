// Important for loading environment variables
// when running migrations and seeders
require('dotenv-flow').config({ silent: true });

const DB_CONFIG = Object.freeze({
	DB_USERNAME: process.env.DB_USERNAME,
	DB_PASSWORD: process.env.DB_PASSWORD,
	DB_DATABASE: process.env.DB_DATABASE,
	DB_HOST: process.env.DB_HOST ?? '127.0.0.1',
	DB_PORT: process.env.DB_PORT ?? '3306',
	DB_CONNECTION: process.env.DB_CONNECTION ?? 'mysql'
});

module.exports = {
	development: {
		username: DB_CONFIG.DB_USERNAME,
		password: DB_CONFIG.DB_PASSWORD,
		database: DB_CONFIG.DB_DATABASE,
		host: DB_CONFIG.DB_HOST,
		port: DB_CONFIG.DB_PORT,
		dialect: DB_CONFIG.DB_CONNECTION
	},
	test: {
		username: DB_CONFIG.DB_USERNAME,
		password: DB_CONFIG.DB_PASSWORD,
		database: DB_CONFIG.DB_DATABASE,
		host: DB_CONFIG.DB_HOST,
		port: DB_CONFIG.DB_PORT,
		dialect: DB_CONFIG.DB_CONNECTION
	},
	production: {
		username: DB_CONFIG.DB_USERNAME,
		password: DB_CONFIG.DB_PASSWORD,
		database: DB_CONFIG.DB_DATABASE,
		host: DB_CONFIG.DB_HOST,
		port: DB_CONFIG.DB_PORT,
		dialect: DB_CONFIG.DB_CONNECTION
	}
};
