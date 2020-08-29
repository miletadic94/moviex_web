import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import {
  getReceiptsAction,
  editReceiptAction,
} from "../../redux/actions/receipt.actions";
import { ORDER_STATUS } from "../../utils/constants";
import { formatDate } from "../../services/dateTime.service";

const UserReceipts = ({
  currentUser,
  receipts,
  getReceiptsAction,
  editReceiptAction,
}) => {
  useEffect(() => {
    if (currentUser) {
      getReceiptsAction(currentUser.id);
    }
  }, [currentUser]);

  const handleCancelReceipt = (id) => {
    editReceiptAction(id);
    setTimeout(() => getReceiptsAction(currentUser.id), 300);
  };

  if (receipts.length === 0) return <h3>You don't have any order</h3>;

  return (
    <div className="orders-container">
      {receipts.map(({ receipt, totalPrice }) => (
        <div className="order-item">
          <div className="order-item-left">
            <h3>#{receipt.id}</h3>
            <span>Total Price: {totalPrice}</span>
            <span className="order-date">{formatDate(receipt.createdAt)}</span>
          </div>
          <div className="order-item-center">
            {receipt?.productReceipts.map((productItem) => (
              <div className="order-info-container">
                <span className="order-title">
                  {productItem?.product?.movie?.title}
                </span>
                <span className="order-quantity">x{productItem?.quantity}</span>
                <span className="order-price">
                  Price: {productItem?.product?.price} rsd
                </span>
              </div>
            ))}
          </div>
          <div className="order-item-right">
            <span className={`status ${ORDER_STATUS[receipt.status]}`}>
              {ORDER_STATUS[receipt.status]}
            </span>
            {receipt.status === 1 && (
              <span
                className="order-cancel"
                onClick={() => handleCancelReceipt(receipt.id)}
              >
                Cancel Order
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  receipts: state.receipts,
});

const mapDispatchToProps = {
  getReceiptsAction,
  editReceiptAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserReceipts);
