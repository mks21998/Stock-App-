import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import AuthService from "../services/auth.service";
import alina_invest from '../image/alina-invest.png'
import alina_invest1 from '../image/alina-invest1.png'
// import google_logo from '../image/google-logo.jpg'
import google_logo from '../image/google-logo.png'



export default function Navbar() {

  const [currentUser, setCurrentUser] = useState(undefined);

  // Logout Function
  const logOut = () => {
    AuthService.logout();
  };

  // Getting user name
  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  // Login With Google 
  function loginWithGoogle() {
    alert("Great Shot!");
  }

  return (
    <div>
      <nav className="navbar navbar-expand ">
        <Link to={"/"} className="navbar-brand">
          <img src={alina_invest1} alt="alina_invest" height="50px" />
          <span className="alina-logo">ALINA INVEST</span>
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item ">
            <Link to={"/home"} className="nav-link underline">
              Home
            </Link>
          </li>
          <li className="nav-item ">
            <Link to={"/watchlist"} className="nav-link underline">
              Watchlist
            </Link>
          </li>
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                Logout
              </Link>
            </li>
          </div>
        ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  <button className="google-logo" onClick={loginWithGoogle}>
                    <img src={google_logo} alt='google logo' height="30px" />
                    <span className="google-logo-text">Contine with Google</span>
                  </button>
                </Link>
              </li>
            </div>
          )}
      </nav>
    </div>
  )
}
