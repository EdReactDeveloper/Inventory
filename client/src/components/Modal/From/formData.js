export const add = ({ name, description, tags, category, count, location, type }) => [
	{
		heading: 'name',
		value: name,
		name: 'name',
		field: 'input', 
		type: 'text'
	},
	{
		heading: 'description',
		value: description,
		name: 'description',
		field: 'textarea',
		type: 'text'
	},
	{
		heading: 'tags',
		value: tags,
		name: 'tags',
		field: 'input',
		type: 'text'
	},
	{
		heading: 'category',
		value: category,
		name: 'category',
		field: 'input',
		type: 'text'
	},
	{
		heading: 'count',
		value: count,
		name: 'count',
		field: 'input',
		type: 'number'
	},
	{
		heading: 'location',
		value: location,
		name: 'location',
		field: 'input',
		type: 'text'
	},
	{
		heading: 'type',
		value: type,
		name: 'type',
		field: 'input',
		type: 'text'
	}
];

export const renderProfile = ({ name, description, hidden }) => [
	{
		heading: 'name',
		name: 'name',
		field: 'input',
		value: name,
		type: 'text'
	},
	{
		heading: 'name',
		name: 'description',
		field: 'textarea',
		value: description,
		type: 'text'
	},
	{
		heading: 'hidden',
		name: 'hidden',
		field: 'input',
		value: hidden,
		type: 'checkbox'
	}
];
