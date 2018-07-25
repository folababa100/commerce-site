import React from 'react';
import { connect } from "react-redux";
import DashboardItem from './DashboardItem';
import selectProduct from '../selectors/products'

export const DashboardMain = (props) => {
  return (
    <main className="container">
      <div className="container">
        <div className="row">
          {
            props.products.length === 0 ? (
              <p>No products available yet</p>
            ) : (
              props.products.map((product) => {
                return <DashboardItem key={product.id} {...product} />
              })
            )
          }
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

export default connect(mapStateToProps)(DashboardMain);
