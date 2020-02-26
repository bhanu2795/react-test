import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import { getProduct } from '../../actions/product/actions';

const Products = props => {
  //Todo Product listing
  useEffect(() => {
    props.getProduct();
  }, [props])

  return (
    <div>
      {
        props.product.data ? (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Categories</th>
                <th scope="col">Info</th>
              </tr>
            </thead>
            <tbody>
              {
                props.product.data.products.length ? (
                  props.product.data.products.map(({ name, price, categories, slug }, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{name}</td>
                      <td>{price}</td>
                      <td>{categories[0].name}</td>
                      <td><Link to={`/product/${slug}`}>Product Detals</Link></td>
                    </tr>
                  ))
                ) : <tr>No Data Available</tr>

              }
            </tbody>
          </table>
        ) : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => ({
  getProduct: () => dispatch(getProduct())
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
