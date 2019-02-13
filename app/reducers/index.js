import axios from 'axios';

// ACTION TYPES
const GOT_ALL_CANDIES = 'GOT_ALL_CANDIES_SUCCESSFULLY';
const GOT_SINGLE_CANDY = 'GOT_SINGLE_CANDY';

// ACTION CREATORS
const gotAllCandies = (candies) => ({
  type: GOT_ALL_CANDIES,
  candies
});

const gotSingleCandy = (candy) => ({
  type: GOT_SINGLE_CANDY,
  candy
})

// THUNK CREATORS
export const getAllCandies = () => async (dispatch) => {
  const {data} = await axios.get('/api/candies');
  dispatch(gotAllCandies(data));
}

export const getSingleCandy = (id) => async (dispatch) => {
  const {data} = await axios.get(`/api/candies/${id}`);
  dispatch(gotSingleCandy(data));
}

// REDUCER
const initialState = {
  allCandies: [],
  singleCandy: {}
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_CANDIES:
      return {...state, allCandies: action.candies};
    case GOT_SINGLE_CANDY:
      return {...state, singleCandy: action.candy}
    default:
      return state;
  }
}

export default rootReducer
