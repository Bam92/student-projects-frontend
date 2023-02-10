import { configureStore } from '@reduxjs/toolkit';
import projetsReducer from '../feature/projetsSlice';
import postReducer from '../feature/postslice';
import postsReducer from '../feature/postsslice';

export default configureStore({
	reducer: {
		projets: projetsReducer,
		posts: postsReducer,
		post: postReducer,
	},
});
