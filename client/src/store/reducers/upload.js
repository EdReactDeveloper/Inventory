import { UPLOADING, UPLOADING_SUCCESS, UPLOADING_FAIL } from '../actions/types';

const initialState = {
	filename: '',
	filePath: '',
	isUploading: false,
	error: null
};

const reducer = (state = initialState, action) => {
	const { payload, type } = action;
	switch (type) {
		case UPLOADING:
			return { ...state, isUploading: true };

		case UPLOADING_SUCCESS:
			return { ...state, filename: payload.filename, filePath: payload.filePath, isUploading: false };

		case UPLOADING_FAIL:
			return {
				isUploading: false,
				error: payload
			};

		default:
			return state;
	}
};

export default reducer;
