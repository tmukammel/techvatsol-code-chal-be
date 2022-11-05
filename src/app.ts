import { APP_CONFIG } from './configs';
import db from './db/models/index';
import app from './routes';

const port = APP_CONFIG.PORT || 3000;

db.sequelize
	.authenticate()
	.then(() => {
		console.debug('MySQL database connection established');

		app.listen(port, () => {
			console.debug(`HTTP RESTful service ready on port: ${port}`);
		});
	})
	.catch((error: unknown) => {
		console.debug('Unable to connect to the database', error);
	});
