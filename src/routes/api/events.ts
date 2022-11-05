import { events } from '../urls';
import { Router } from 'express';
const eventsRouter = Router();
const controller = require('../../controllers/EventsController');

eventsRouter.post(events.POST_EVENT, controller.createEvent);
eventsRouter.put(events.PUT_EVENT, controller.updateEvent);
eventsRouter.get(events.GET_EVENTS, controller.getEvents);
eventsRouter.get(events.GET_EVENT, controller.getEvent);
eventsRouter.delete(events.DELETE_EVENT, controller.deleteEvent);

export default eventsRouter;
