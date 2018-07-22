import React from 'react';
import { connect } from "react-redux";
import selectProduct from '../selectors/products'

export const DashboardMain = (props) => {
  return (
    <main className="container">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card mt-4">
              <div className="card-body">
                <h5>Samsung Phone</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-4">
              <div className="card-body">
                <h5>Iphone Smartphone</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-4">
              <div className="card-body">
                <h5>Tecno Phone</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-4">
              <div className="card-body">
                <h5>Tecno Phone</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

const mapStateToProps = (state) => {
  return {
    products: selectProduct(state.products, state.filters)
  }
}

export default connect(mapStateToProps, DashboardMain);
