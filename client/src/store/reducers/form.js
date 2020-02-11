import { FORM, FORM_CLOSE, UPLOADING, UPLOADING_SUCCESS, UPLOADING_FAIL, REMOVE_FILE_SUCCESS } from '../actions/types/form';

const initialState = {
	formType: null,
	instance: null,
	data: null,
	filename: '',
	filePath: '',
	isUploading: false,
	error: null
};

const reducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case FORM:
			return {
				...state,
				formType: payload.formType,
				instance: payload.instance,
				data: payload.page,
				filePath: payload.page && payload.page.img
			};
		case FORM_CLOSE:
			return { ...initialState };

		case UPLOADING:
			return { ...state, isUploading: true };

		case UPLOADING_SUCCESS:
			return { ...state, filename: payload.filename, filePath: payload.filePath, isUploading: false };

		case REMOVE_FILE_SUCCESS: {
			return { ...state, filename: '', filePath: '', isUploading: false };
		}

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
