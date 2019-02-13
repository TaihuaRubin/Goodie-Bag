import axios from 'axios';

// ACTION TYPES
const GOT_ALL_CANDIES = 'GOT_ALL_CANDIES_SUCCESSFULLY';

// ACTION CREATORS
const gotAllCandies = (candies) => ({
  type: GOT_ALL_CANDIES,
  candies
});

// THUNK CREATORS
export const getAllCandies = () => async (dispatch) => {
  const {data} = await axios.get('/api/candies');
  dispatch(gotAllCandies(data));
}

// REDUCER
const initialState = {
  allCandies: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_CANDIES:
      return {...state, allCandies: action.candies};
    default:
      return state;
  }
}

export default rootReducer
