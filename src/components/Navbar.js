import React from 'react';

function Navbar() {
  return (
    <nav style={{display: 'block',  textAlign: 'center', backgroundColor:'#dedeff',  padding: '2rem'}} className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/" style={{textDecoration: 'none', fontSize:'2rem'}}>Discussion Forum</a>
      {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> */}
      {/* <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/" style={{textDecoration: 'none'}}>Home</a>
          </li>
        </ul>
      </div> */}
    </nav>
  );
}

export default Navbar;
