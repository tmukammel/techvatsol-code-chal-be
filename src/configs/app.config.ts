// Important for loading environment variables
// when running migrations and seeders
require('dotenv-flow').config({ silent: true });

export const APP_CONFIG = Object.freeze({
	PORT: process.env.PORT ?? 6000
});
