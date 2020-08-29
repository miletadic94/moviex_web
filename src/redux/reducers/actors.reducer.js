import {
  GET_ACTOR_SUCCESS,
  GET_ACTORS_SUCCESS,
} from "../actions/actors.actions";

const actorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case GET_ACTOR_SUCCESS:
      return payload;
    default:
      return state;
  }
};

const actorsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_ACTORS_SUCCESS:
      return payload;
    default:
      return state;
  }
};

export { actorReducer, actorsReducer };
