import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  CLEAN_CART,
} from "../actions/shoppingCart.actions";

const initialState = [];

function findMovieIndex(state, id) {
  return state.findIndex((item) => {
    return item.movie.id === id;
  });
}

function addItemToCartReducer(state, item, quantity) {
  const itemIndex = findMovieIndex(state, item.id);

  if (itemIndex === -1) {
    state.push({ movie: item, quantity });
  } else {
    state[itemIndex].quantity = quantity;
  }
  return [...state];
}

function removeItemFromCartReducer(state, id) {
  const itemIndex = findMovieIndex(state, id);
  if (itemIndex > -1) {
    state.splice(itemIndex, 1);
  }
  return [...state];
}

export default (state = initialState, { type, item, quantity, id }) => {
  switch (type) {
    case ADD_ITEM_TO_CART:
      return addItemToCartReducer(state, item, quantity);
    case REMOVE_ITEM_FROM_CART:
      return removeItemFromCartReducer(state, id);
    case CLEAN_CART:
      return [];
    default:
      return state;
  }
};
