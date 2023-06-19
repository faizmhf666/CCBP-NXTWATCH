import {Link, withRouter} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import './index.css'

class Header extends Component {
  executeLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    return (
      <nav className="header-main">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
            className="website-logo"
          />
        </Link>
        <div className="nav-buttons">
          <button className="nav-button" data-testid="theme" type="button">
            <FaMoon className="theme-icon" />
          </button>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
            className="profile-img"
          />
          <div className="popup-container">
            <Popup
              modal
              trigger={
                <button type="button" className="logout-button-large">
                  Logout
                </button>
              }
            >
              {close => (
                <>
                  <div>
                    <p>Are you sure, you want to logout?</p>
                  </div>
                  <button
                    type="button"
                    className="trigger-button"
                    onClick={() => close()}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="logout-button-large"
                    onClick={this.executeLogout}
                  >
                    Confirm
                  </button>
                </>
              )}
            </Popup>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Header)
