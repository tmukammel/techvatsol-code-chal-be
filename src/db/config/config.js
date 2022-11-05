import { DB_CONFIG } from '../../configs';

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
