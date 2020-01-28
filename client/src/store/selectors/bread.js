import { createSelector } from 'reselect';

const breadSelector = (state) => state.bread;
const mapBreadSelector = createSelector([ breadSelector ], (store) => {
	const { data, isLoading } = store;
	let items = []
	let path = ''
	if (data.length > 0) {
		items = data.map((item) => {
			const { name, _id  } = item;
			path += `/${item._id}`
			return { name, id: _id, path };
		});
	}

	return {
		items, 
		itemsLoading: isLoading
	};
});

export default mapBreadSelector;
