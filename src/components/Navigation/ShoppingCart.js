import React, { Fragment } from "react";
import { connect } from "react-redux";
import { removeItemFromCart } from "../../redux/actions/shoppingCart.actions";
import { createReceiptAction } from "../../redux/actions/receipt.actions";
import { Button } from "../Button";
import clickOutsideHOC from "../hoc/clickOutsideHoc";

const ShoppingCart = ({
  open,
  shoppingCart,
  removeItemFromCart,
  createReceiptAction,
}) => {
  return (
    <div className="nav-item dropdown">
      <div className="cart-container">
        <i className="fas fa-shopping-cart">
          {!!shoppingCart.length && (
            <span className="cart-badge">{shoppingCart.length}</span>
          )}
        </i>
      </div>
      {open && !!shoppingCart.length && (
        <div className="dropdown-menu d-block">
          {!!shoppingCart.length ? (
            <Fragment>
              {shoppingCart.map(({ movie, quantity }) => (
                <div className="d-flex align-items-center justify-content-between p-2">
                  <span className="cart-item-title">{movie.title}</span>
                  <small className="ml-2">x {quantity}</small>
                  <i
                    onClick={() => removeItemFromCart(movie.id)}
                    class="pointer cart-item-remove fas fa-times"
                  ></i>
                </div>
              ))}
              <div className="p-3">
                <Button
                  label="Get Movies"
                  onClick={() => createReceiptAction(shoppingCart)}
                />
              </div>
            </Fragment>
          ) : (
            <div className="dropdown-item disabled">Cart Empty</div>
          )}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  shoppingCart: state.shoppingCart,
});

const mapDispatchToProps = {
  removeItemFromCart,
  createReceiptAction,
};

const ShoppingCartHoc = clickOutsideHOC(ShoppingCart);
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartHoc);
