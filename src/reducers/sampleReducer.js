import { SHOW_GREETING } from "../actions/types";

const initialState = {
  greeting: "React + Redux Starter"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_GREETING:
      return {
        ...state
      };
    default:
      return state;
  }
}
