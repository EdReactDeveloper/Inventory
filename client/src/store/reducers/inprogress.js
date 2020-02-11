import { IN_PROGRESS } from '../actions/types/inprogress';

const initialState = {
	inProgress: []
};

const reducer = (state = initialState, action) => {
	const { payload, type } = action;
	switch (type) {
		case IN_PROGRESS:
			return {
				...state,
				inProgress: payload.isFetching
					? [ ...state.inProgress, payload.id ]
					: state.inProgress.filter((id) => id !== payload.id)
			};
		default:
			return state;
	}
};

export default reducer;
