const db = require('../db/models');
const queryParser = require('sequelize-query')(db);

export class Events {
	public createEvent(req: any) {
		const data = { ...req.body, ...req.params };
		return db.Event.createEvent(data);
	}
	public async updateEvent(req: any) {
		const model = await this.getEvent(req);
		if (model === null) return Promise.resolve(null);
		return db.Event.updateEvent(model, req.body);
	}
	public async patchEvent(req: any) {
		const model = await this.getEvent(req);
		if (model === null) return Promise.resolve(null);
		return db.Event.updateEvent(model, req.body);
	}
	public async getEvents(req: any) {
		const query = await queryParser.parse(req);
		return db.Event.getEvents(query);
	}

	public async getEvent(req: any) {
		const query = await queryParser.parse(req);
		return db.Event.getEventById(req?.params?.id, 'include' in query ? query.include : null);
	}

	public deleteEvent(req: any) {
		return db.Event.deleteEvent(req.params);
	}
}
