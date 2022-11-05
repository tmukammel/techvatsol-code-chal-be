// Important for loading environment variables
// when running migrations and seeders
require('dotenv-flow').config({ silent: true });

export const DB_CONFIG = Object.freeze({
	DB_USERNAME: process.env.DB_USERNAME,
	DB_PASSWORD: process.env.DB_PASSWORD,
	DB_DATABASE: process.env.DB_DATABASE,
	DB_HOST: process.env.DB_HOST ?? '127.0.0.1',
	DB_PORT: process.env.DB_PORT ?? '3306',
	DB_CONNECTION: process.env.DB_CONNECTION ?? 'mysql'
});
