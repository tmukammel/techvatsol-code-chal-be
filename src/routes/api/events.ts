import { events } from '../urls';
import { Router } from 'express';
const eventsRouter = Router();
const controller = require('../../controllers/EventsController');
import { createEventValidationSchema, updateEventValidationSchema } from '../../validators/event';

eventsRouter.post(events.POST_EVENT, createEventValidationSchema, controller.createEvent);
eventsRouter.put(events.PUT_EVENT, updateEventValidationSchema, controller.updateEvent);
eventsRouter.get(events.GET_EVENTS, controller.getEvents);
eventsRouter.get(events.GET_EVENT, controller.getEvent);
eventsRouter.delete(events.DELETE_EVENT, controller.deleteEvent);

export default eventsRouter;
