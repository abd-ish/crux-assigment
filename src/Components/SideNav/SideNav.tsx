import React from 'react';
import './SideNav.css';

const MyComponent: React.FC = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="d-flex flex-sm-column flex-row flex-nowrap align-items-center sticky-top"
          style={{ padding: '0', height: '100vh' }}
        >
          <a
            href="/"
            className="d-block p-3 link-dark text-decoration-none"
            title=""
          >
            <img src="/brand.jpeg" alt="brand" width="50" height="50" />
          </a>
          <ul className="nav flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
            <li className="nav-item">
              <a href="#" className="nav-link py-3 px-2" title="">
                <i
                  className="fa fa-message"
                  style={{ fontSize: '20px', color: 'black' }}
                ></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link py-3 px-2" title="">
                <i
                  className="fa fa-book"
                  style={{ fontSize: '20px', color: 'black' }}
                ></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link py-3 px-2" title="">
                <i
                  className="fas fa-layer-group"
                  style={{ fontSize: '20px', color: 'black' }}
                ></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link py-3 px-2" title="">
                <i
                  className="fas fa-network-wired"
                  style={{ fontSize: '20px', color: 'black' }}
                ></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
