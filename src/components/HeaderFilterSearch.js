import React from 'react';
import PhonesTablets from './PhonesTablets';
import ComputerAccessories from './ComputerAccessories';

export default class HeaderFilterSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      show1: false
    }
  }
  renderComponent() {
    if (this.state.show === true) {
      return <PhonesTablets/>
    } else if (this.state.show1 === true) {
      return <ComputerAccessories/>
    } else {
      return <div></div>
    }
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-adjust navbar-expand-lg navbar-dark snorkel-blue nav-border">
          <div className="container">
            <div className="row">
              <div className="auto-auto">
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li onMouseEnter={() => this.state.show === false ? this.setState({ show: true, show1: false }) : this.setState({ show: false, show1: false })} className="nav-item">
                      {/* <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> */}
                      <div className="nav-link cursor">Phones & Tablets</div>
                    </li>
                    <li onMouseEnter={() => this.state.show1 === false ? this.setState({ show1: true, show: false }) : this.setState({ show1: false, show: false })} className="nav-item ml-6">
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
        {this.renderComponent()}
      </div>
    )
  }
}
