const initialState = {
  score: null,
  questions: null,
  userAnswers: [0, 0, 0],
  index: 0,
};
export default function scoreReducer(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case 'SET_QUESTIONS':
      //
      nextState = {
        ...state,
        questions: action.value.questions,
      };
      return nextState || state;

    case 'SET_USER_ANSWERS':
      //
      nextState = {
        ...state,
        userAnswers: action.value.userAnswers,
      };
      return nextState || state;

    case 'MODIFY_SCORE':
      //
      nextState = {
        ...state,
        score: action.value.score,
      };
      return nextState || state;

    case 'INCREMENT_INDEX':
      //
      nextState = {
        ...state,
        index: action.value.index,
      };
      return nextState || state;
    default:
      return state;
  }
}
