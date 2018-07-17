import React from 'react';

const SignupPage = (props) => {
  return (
    <div className="box-layout">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 col-lg-3">
            <div className="card">
              <div className="card-body">
                <h3 className="text-center">Login</h3>
                <form className="mt-4">
                  <div className="form-group">
                    <label htmlFor="Email1">Email address</label>
                    <input placeholder="Enter your email" id="Email1" type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Password1">Password</label>
                    <input placeholder="Enter your password" id="Password1" type="password" className="form-control" />
                  </div>
                  <button className="btn btn-primary btn-block">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupPage
