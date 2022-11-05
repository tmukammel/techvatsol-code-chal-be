'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Event extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}

	Event.init(
		{
			name: DataTypes.STRING,
			location: DataTypes.STRING,
			date: DataTypes.DATE
		},
		{
			sequelize,
			modelName: 'Event'
		}
	);

	Event.getEventById = (id, include = null) => {
		return Event.findByPk(id, { include });
	};

	Event.getEvent = (query) => {
		return Event.findOne(query);
	};

	Event.getEvents = (query) => {
		return Event.findAndCountAll(query);
	};

	Event.createEvent = (data) => {
		const model = {};
		if (data.name) model.name = data.name;
		if (data.location) model.location = data.location;
		if (data.date) model.date = data.date;

		return Event.create(model);
	};

	Event.updateEvent = (model, data) => {
		if (data.name) model.name = data.name;
		if (data.location) model.location = data.location;
		if (data.date) model.date = data.date;

		return model.save();
	};

	Event.deleteEvent = (where) => {
		return Event.destroy({ where });
	};

	return Event;
};
