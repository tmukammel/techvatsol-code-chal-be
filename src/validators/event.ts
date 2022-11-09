const { checkSchema } = require('express-validator');

export const createEventValidationSchema = checkSchema({
	name: {
		isLength: {
			errorMessage: 'Name should be at least 7 chars long',
			options: { min: 5 }
		}
	},
	location: {
		isLength: {
			errorMessage: 'Location should be at least 7 chars long',
			options: { min: 7 }
		}
	},
	date: {
		isDateTime: {
			errorMessage: 'Date should be in a valid UTC date format'
		}
	}
});

export const updateEventValidationSchema = checkSchema({
	name: {
		isLength: {
			errorMessage: 'Name should be at least 7 chars long',
			options: { min: 5 }
		},
		optional: true
	},
	location: {
		isLength: {
			errorMessage: 'Password should be at least 7 chars long',
			// Multiple options would be expressed as an array
			options: { min: 7 }
		},
		optional: true
	},
	date: {
		isDateTime: {
			errorMessage: 'Date should be in a valid UTC date format'
		},
		optional: true
	}
});
