import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => {
  return (
    <div className="box-layout">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-6 col-lg-4">
            <div className="card card--adjust">
              <div className="card-body text-center">
                <form>
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Enter email" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Type of business" />
                  </div>
                  <div className="form-group">
                    <input placeholder="Enter phone number" type="number" className="form-control" />
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
