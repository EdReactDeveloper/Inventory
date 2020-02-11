import { SET_NOTE, REMOVE_NOTE, MOVE_NOTE } from '../actions/types/notification';

const initialState = {
	notes: [],
	msg: '',
	move: [], 
}

const reducer = (state = initialState, action) => {
	const { payload, type } = action;
	switch (type) {
		case SET_NOTE: return {
			...state, 
			msg: payload.msg, 
			notes: [payload.id, ...state.notes],
			move: [payload.id, ...state.move]
		}
		
		case MOVE_NOTE: return {...state, move: state.move.filter((item) => item !== payload) }
		
		case REMOVE_NOTE: return {...state, notes: state.notes.filter((item) => item !== payload)}
			
		default:
			return state;
	}
};

export default reducer;
