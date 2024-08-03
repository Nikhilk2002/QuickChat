import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainInterface.css';
import { Link, Outlet, useNavigate } from 'react-router-dom';

function MainInterface() {
  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <header className="bg-primary text-white text-center py-3">
        <h1>Chat Application</h1>
      </header>
      
      <div className="row bg-secondary bg-gradient">
        <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
          <div className="position-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/chats">
                  Chats
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contacts">
                  Contacts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/settings">
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainInterface;
