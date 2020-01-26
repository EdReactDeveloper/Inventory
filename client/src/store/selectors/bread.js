import { createSelector } from 'reselect';

const breadSelector = (state) => state.bread;
const mapBreadSelector = createSelector([ breadSelector ], (store) => {
	const { data, isLoading } = store;
	let items = []
	if (data.length > 0) {
		items = data.map((item) => {
			const { name, _id, parentId, path } = item;
			return { name, id: _id, parentId, path };
		});
	}

	return {
		items, 
		itemsLoading: isLoading
	};
});

export default mapBreadSelector;
