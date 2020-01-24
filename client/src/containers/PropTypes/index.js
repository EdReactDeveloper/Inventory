import { shape, arrayOf, string, bool } from 'prop-types';

export const boardTypes = shape({
	_id: string.isRequired,
	title: string.isRequired,
	userId: string.isRequired,
	topics: arrayOf(
		shape({
			_id: string.isRequired,
			boardId: string.isRequired,
			title: string.isRequired,
			list: arrayOf(
				shape({
					_id: string.isRequired,
					topicId: string.isRequired,
					title: string.isRequired,
					description: string,
					done: bool.isRequired
				})
			)
		})
	).isRequired
});

export const boardsTypes = arrayOf(
	shape({
		_id: string.isRequired,
		title: string.isRequired,
		userId: string.isRequired,
		topics: arrayOf(
			shape({
				_id: string.isRequired,
				boardId: string.isRequired,
				title: string.isRequired,
				list: arrayOf(
					shape({
						_id: string.isRequired,
						topicId: string.isRequired,
						title: string.isRequired,
						description: string,
						done: bool.isRequired
					})
				)
			})
		).isRequired
	}).isRequired
);

export const topicTypes = shape({
	_id: string.isRequired,
	boardId: string.isRequired,
	title: string.isRequired,
	list: arrayOf(
		shape({
			_id: string.isRequired,
			topicId: string.isRequired,
			title: string.isRequired,
			description: string,
			done: bool.isRequired,
		})
	)
})

export const formTypes = shape({
	name: string,
	email: string
})

export const alertsTypes = arrayOf(
	shape({
		msg: string.isRequired,
		status: string.isRequired,
		id: string.isRequired
	})
)