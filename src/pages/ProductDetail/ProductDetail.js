import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { getProductDetails } from '../../actions/product/actions';

const ProductDetail = props => {
  //Todo Product listing

    const { slug } = useParams();
    props.getProductDetails(slug);
    
  return (
    <div>
      {
        props.product.detail ? (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Categories</th>
                <th scope="col">Tags</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {
                <tr>
                  <th scope="row">{1}</th>
                  <td>{props.product.detail.name}</td>
                  <td>{props.product.detail.price}</td>
                  <td>{props.product.detail.categories[0].name}</td>
                  <td>{props.product.detail.tags[0].name}</td>
                  <td>{props.product.detail.description}</td>
                </tr>

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
  getProductDetails: data => dispatch(getProductDetails(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
