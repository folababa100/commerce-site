import React from 'react';

const HeaderFilterSearch = () => {
  return (
    <nav className="navbar navbar-adjust navbar-expand-lg navbar-dark snorkel-blue">
      <div className="container">
        <div className="row">
          <div className="auto-auto">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  {/* <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> */}
                  <div className="nav-link cursor">Phones & Tablets</div>
                </li>
                <li className="nav-item ml-6">
                  <div className="nav-link cursor">Computer & Accessories</div>
                </li>
                <li className="nav-item ml-6">
                  <div className="nav-link cursor">Electronics</div>
                </li>
                <li className="nav-item ml-6">
                  <div className="nav-link cursor">Fashion</div>
                </li>
                <li className="nav-item ml-6">
                  <div className="nav-link cursor">Home & Kitchen</div>
                </li>
                <li className="nav-item ml-6">
                  <div className="nav-link cursor">Baby, Kids & Toys</div>
                </li>
                <li className="nav-item ml-6">
                  <div className="nav-link cursor">Wine & Other Categories</div>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default HeaderFilterSearch;
