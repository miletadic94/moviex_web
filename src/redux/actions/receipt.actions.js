export const GET_RECEIPT = "@RCP/GET_RECEIPT";
export const GET_RECEIPT_SUCCESS = "@RCP/GET_RECEIPT_SUCCESS";
export const getReceiptAction = (id) => ({
  type: GET_RECEIPT,
  id,
});

export const GET_RECEIPTS = "@RCP/GET_RECEIPTS";
export const GET_RECEIPTS_SUCCESS = "@RCP/GET_RECEIPTS_SUCCESS";
export const getReceiptsAction = (userId) => ({
  type: GET_RECEIPTS,
  userId,
});

export const CREATE_RECEIPT = "@RCP/CREATE_RECEIPT";
export const CREATE_RECEIPT_SUCCESS = "@RCP/CREATE_RECEIPT_SUCCESS";
export const createReceiptAction = (payload) => ({
  type: CREATE_RECEIPT,
  payload,
});

export const EDIT_RECEIPT = "@RCP/EDIT_RECEIPT";
export const EDIT_RECEIPT_SUCCESS = "@RCP/EDIT_RECEIPT_SUCCESS";
export const editReceiptAction = (id, status = 3) => ({
  type: EDIT_RECEIPT,
  id,
  status,
});
