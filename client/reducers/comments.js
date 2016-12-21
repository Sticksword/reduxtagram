function postComments(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      return [
        // return new state with new comment appended
        ...state, {
        user: action.author,
        text: action.comment
      }];
    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
}

// above & below make a good example of reducer composition
function comments(state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      // take current state
      ...state,
      // and overwrite this specific post with a new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;
