import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Ideas",
    content: "Test Content",
    author: "1",
    reactions: {
      thumbsUp: 0,
      heart: 0,
      laugh: 0,
      wow: 0,
    },
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.unshift({
        id: Date.now().toString(),
        title: action.payload.title,
        content: action.payload.content,
        author: action.payload.author,
        reactions: {
          thumbsUp: 0,
          heart: 0,
          laugh: 0,
          wow: 0,
        },
      });
    },

    editPost: (state, action) => {
      const { id, title, content } = action.payload;

      const post = state.find((p) => p.id === id);

      if (post) {
        post.title = title;
        post.content = content;
      }
    },

    addReaction: (state, action) => {
      const { id, reaction } = action.payload;

      const post = state.find((p) => p.id === id);

      if (post) {
        post.reactions[reaction]++;
      }
    },
  },
});

export const {
  addPost,
  editPost,
  addReaction,
} = postsSlice.actions;

export default postsSlice.reducer;