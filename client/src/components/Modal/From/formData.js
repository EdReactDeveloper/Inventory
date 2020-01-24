export const add = ({
	name,
	description,
	tags,
	category,
	count,
	location,
	type
}) => [
	{
		heading: 'name',
		value: name,
		name: 'name',
		type: 'input'
	},
	{
		heading: 'description',
		value: description,
		name: 'description',
		type: 'textarea'
	},
	{
		heading: 'tags',
		value: tags,
		name: 'tags',
		type: 'input'
	},
	{
		heading: 'category',
		value: category,
		name: 'category',
		type: 'input'
	},
	{
		heading: 'count',
		value: count,
		name: 'count',
		type: 'input'
	},
	{
		heading: 'location',
		value: location,
		name: 'location',
		type: 'input'
	},
	{
		heading: 'type',
		value: type,
		name: 'type',
		type: 'input'
	}
];
