import { TEST_DISPATCH } from "../types";

const initialState = {
	text: "test"
};

function testReducer(state = initialState, action) {
	switch (action.type) {
		case TEST_DISPATCH:
			return {
				...state,
				text: action.payload
			};
		default:
			return state;
	}
}

export default testReducer;