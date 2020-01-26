import { createSelector } from 'reselect';

const breadSelector = (state) => state.bread;
const mapBreadSelector = createSelector([ breadSelector ], (store) => {
	const { data } = store;
	if (data.length > 0) {
		return data.map((item) => {
			const { name, _id, parentId, path } = item;
			return { name, id: _id, parentId, path };
		});
	}
	return [];
});

export default mapBreadSelector;
