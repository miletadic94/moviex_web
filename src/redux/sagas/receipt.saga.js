import { put, takeLatest } from "redux-saga/effects";
import {
  GET_RECEIPT,
  GET_RECEIPTS,
  GET_RECEIPT_SUCCESS,
  GET_RECEIPTS_SUCCESS,
  CREATE_RECEIPT,
  EDIT_RECEIPT,
} from "../actions/receipt.actions";
import {
  getReceipt,
  getReceipts,
  postReceipt,
  putReceipt,
} from "../../services/receipts.service";
import successHandler from "./successHandler";
import errorHandler from "./errorHandler";
import { CLEAN_CART } from "../actions/shoppingCart.actions";

function* getReceiptSaga({ id }) {
  try {
    const receipt = yield getReceipt(id);
    yield put({
      type: GET_RECEIPT_SUCCESS,
      payload: receipt,
    });
  } catch (error) {
    yield errorHandler(error);
  }
}

function* getReceiptsSaga({ userId }) {
  try {
    const receipts = yield getReceipts(userId);
    yield put({
      type: GET_RECEIPTS_SUCCESS,
      payload: receipts,
    });
  } catch (error) {
    yield errorHandler(error);
  }
}

function* createReceiptSaga({ payload }) {
  try {
    const formData = {
      productReceipts: payload.map((item) => ({
        productId: item.movie.productId,
        quantity: item.quantity,
      })),
    };
    const ticket = yield postReceipt(formData);
    yield successHandler(
      `Movies Successfully Bought, Your Order Id is #${ticket.id}`
    );
    yield put({ type: CLEAN_CART });
  } catch (error) {
    yield errorHandler(error);
  }
}

function* editReceiptSaga({ id, status }) {
  try {
    yield putReceipt(id, { status });
    yield successHandler("Receipt Updated!");
  } catch (error) {
    yield errorHandler(error);
  }
}

export default [
  takeLatest(GET_RECEIPT, getReceiptSaga),
  takeLatest(GET_RECEIPTS, getReceiptsSaga),
  takeLatest(CREATE_RECEIPT, createReceiptSaga),
  takeLatest(EDIT_RECEIPT, editReceiptSaga),
];
