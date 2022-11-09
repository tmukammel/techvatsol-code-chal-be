import { Events } from '../services/events';
const { validationResult } = require('express-validator');

export const createEvent = (req: any, res: any) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).send({
			success: false,
			message: 'Event creation failed.',
			errors: errors.array()
		});
	}
	return new Events()
		.createEvent(req)
		.then((event: any) => {
			res.status(200).send({
				success: true,
				message: 'Event creation succeeded.',
				data: event
			});
		})
		.catch((errors: any) => {
			res.status(400).send({
				success: false,
				message: 'Event creation failed.',
				errors
			});
		});
};

export const updateEvent = (req: any, res: any) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).send({
			success: false,
			message: 'Event creation failed.',
			errors: errors.array()
		});
	}
	return new Events()
		.updateEvent(req)
		.then((event: any) => {
			if (event === null) {
				res.status(404).send({
					success: false,
					message: 'Event reference not found.'
				});
			} else {
				res.status(200).send({
					success: true,
					message: 'Event update succeeded.',
					data: event
				});
			}
		})
		.catch((errors: any) => {
			res.status(400).send({
				success: false,
				message: 'Event update failed.',
				errors
			});
		});
};

export const getEvents = (req: any, res: any) => {
	return new Events()
		.getEvents(req)
		.then((events: any) => {
			res.status(200).send({
				success: true,
				message: 'Events fetch succeeded.',
				data: events
			});
		})
		.catch((errors: any) => {
			res.status(400).send({
				success: false,
				message: 'Events fetch failed.',
				errors
			});
		});
};

export const getEvent = (req: any, res: any) => {
	return new Events()
		.getEvent(req)
		.then((event: any) => {
			if (event === null) {
				res.status(404).send({
					success: false,
					message: 'Event reference not found.'
				});
			} else {
				res.status(200).send({
					success: true,
					message: 'Event fetch succeeded.',
					data: event
				});
			}
		})
		.catch((errors: any) => {
			res.status(400).send({
				success: false,
				message: 'Event fetch failed.',
				errors
			});
		});
};

export const deleteEvent = (req: any, res: any) => {
	return new Events()
		.deleteEvent(req)
		.then((deleted: boolean) => {
			if (deleted == false) {
				res.status(404).send({
					success: false,
					message: 'Event reference not found.'
				});
			} else {
				res.status(200).send({
					success: true,
					message: 'Event delete succeeded.'
				});
			}
		})
		.catch((errors: any) => {
			res.status(400).send({
				success: false,
				message: 'Event delete failed.',
				errors
			});
		});
};
