import { SET_DESCRIPTIVE_DATA } from "../actions";
const initialState = {
  currentAction: "immerse",
  descriptiveData: null
};
const api = (state = initialState, action) => {
  switch (action.type) {
    case SET_DESCRIPTIVE_DATA:
      const { descriptiveData } = action;
      return Object.assign({}, state, { descriptiveData });
    default: {
      return state;
    }
  }
};

export default api;
