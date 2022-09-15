import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./reducers/testReducer";

const store = configureStore({
	reducer: {
		// Add your reducers or slices here
		test: testReducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
	devTools: process.env.NODE_ENV !== "production"
});

export default store;