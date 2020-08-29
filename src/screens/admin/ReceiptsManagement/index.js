import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsersAction } from "../../../redux/actions/users.actions";
import {
  getReceiptsAction,
  editReceiptAction,
} from "../../../redux/actions/receipt.actions";
import Select from "../../../components/Select";
import { ORDER_STATUS } from "../../../utils/constants";
import { formatDate } from "../../../services/dateTime.service";

const ReceiptManagement = ({
  getUsersAction,
  users,
  receipts,
  getReceiptsAction,
  editReceiptAction,
}) => {
  useEffect(() => {
    getUsersAction();
  }, []);

  if (!users) return null;

  const updateReceiptStatus = (id) => {
    return (value) => {
      editReceiptAction(id, value);
    };
  };

  return (
    <div>
      <div className="row align-items-center my-3">
        <h3 className="col-md2 pb-5">Receipts for:</h3>
        <div className="col-md-4">
          <Select
            options={users.map((item) => ({
              value: item.id,
              label: `${item.firstName} ${item.lastName}`,
            }))}
            onSelect={getReceiptsAction}
          />
        </div>
      </div>
      <div className="orders-container">
        {receipts.map(({ receipt, totalPrice }) => (
          <div className="order-item">
            <div className="order-item-left">
              <span className="order-title">#{receipt.id}</span>
              <span>Total Price: {totalPrice}</span>
              <span className="order-date">
                {formatDate(receipt.createdAt)}
              </span>
            </div>
            <div className="order-item-center">
              {receipt?.productReceipts.map((productItem) => (
                <div className="order-info-container">
                  <span className="order-title">
                    {productItem?.product?.movie?.title}
                  </span>
                  <span className="order-quantity">
                    x{productItem?.quantity}
                  </span>
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
                <Select
                  options={Object.keys(ORDER_STATUS).map((key) => ({
                    value: key,
                    label: ORDER_STATUS[key],
                    disabled: key == 1,
                  }))}
                  defaultValue={receipt.status}
                  onSelect={updateReceiptStatus(receipt.id)}
                  required
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProp = (state) => ({
  users: state.users,
  receipts: state.receipts,
});

const mapDispatchToProps = {
  getUsersAction,
  getReceiptsAction,
  editReceiptAction,
};

export default connect(mapStateToProp, mapDispatchToProps)(ReceiptManagement);
