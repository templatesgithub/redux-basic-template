import { TEST_DISPATCH } from "../types";

export function testDispatch(testText) {
	return (dispatch) => {
		dispatch({
			type: TEST_DISPATCH,
			payload: testText,
		});
	};
}