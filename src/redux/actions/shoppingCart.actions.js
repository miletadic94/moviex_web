export const ADD_ITEM_TO_CART = "@CART/ADD_ITEM_TO_CART";
export const addItemToCart = (item, quantity) => ({
  type: ADD_ITEM_TO_CART,
  item,
  quantity,
});

export const REMOVE_ITEM_FROM_CART = "@CART/REMOVE_ITEM_FROM_CART";
export const removeItemFromCart = (id) => ({
  type: REMOVE_ITEM_FROM_CART,
  id,
});

export const CLEAN_CART = "@CART/CLEAN_CART";
