import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { getMovieProductAction } from "../../../redux/actions/movies.actions";
import { addItemToCart } from "../../../redux/actions/shoppingCart.actions";

import { Button } from "../../../components/Button";

const ProductComponent = ({
  movie,
  getMovieProductAction,
  movieProduct,
  currentUser,
  addItemToCart,
}) => {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    getMovieProductAction(movie.id);
  }, [movie.id]);

  if (!movieProduct || !currentUser.isConfirmed) return null;

  return (
    <div className="product-container">
      <span className="price-info">{movieProduct.price * quantity} rsd</span>
      <div class="d-flex align-items-center p-2">
        <i
          onClick={quantity > 1 ? () => setQuantity(quantity - 1) : undefined}
          class="pointer fas fa-minus"
        />
        <h3 className="m-3">{quantity}</h3>
        <i
          onClick={
            quantity < movieProduct.quantity
              ? () => setQuantity(quantity + 1)
              : undefined
          }
          class="pointer fas fa-plus mr-2"
        />
        <Button
          type="button"
          label="Add To Cart"
          onClick={() =>
            addItemToCart({ ...movie, productId: movieProduct.id }, quantity)
          }
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  movieProduct: state.movieProduct,
});

const mapDispatchToProps = {
  getMovieProductAction,
  addItemToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductComponent);
