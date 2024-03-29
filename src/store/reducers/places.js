import { SET_PLACES } from "../actions/actionTypes";

const initialState = {
  places: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLACES:
      return {//new object
        ...state,
        //set places equal to the places set on the server
        places: action.places
      };
    default:
      return state;
  }
};

export default reducer;
