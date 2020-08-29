import {
  GET_RECEIPT_SUCCESS,
  GET_RECEIPTS_SUCCESS,
} from "../actions/receipt.actions";

const receiptReducer = (state = null, { type, payload }) => {
  switch (type) {
    case GET_RECEIPT_SUCCESS:
      return payload;
    default:
      return state;
  }
};

const receiptsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_RECEIPTS_SUCCESS:
      return payload;
    default:
      return state;
  }
};

export { receiptReducer, receiptsReducer };
