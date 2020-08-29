export const GET_ACTOR = "@GNR/GET_ACTOR";
export const GET_ACTOR_SUCCESS = "@GNR/GET_ACTOR_SUCCESS";
export const getActorAction = (id) => ({
  type: GET_ACTOR,
  id,
});

export const GET_ACTORS = "@GNR/GET_ACTORS";
export const GET_ACTORS_SUCCESS = "@GNR/GET_ACTORS_SUCCESS";
export const getActorsAction = () => ({
  type: GET_ACTORS,
});

export const CREATE_ACTOR = "@GNR/CREATE_ACTOR";
export const CREATE_ACTOR_SUCCESS = "@GNR/CREATE_ACTOR_SUCCESS";
export const createActorAction = (payload) => ({
  type: CREATE_ACTOR,
  payload,
});

export const EDIT_ACTOR = "@GNR/EDIT_ACTOR";
export const EDIT_ACTOR_SUCCESS = "@GNR/EDIT_ACTOR_SUCCESS";
export const editActorAction = (id, payload) => ({
  type: EDIT_ACTOR,
  id,
  payload,
});
