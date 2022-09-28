import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



export default function Navbar(props) {
  return (
    <nav className= {`navbar navbar-expand-lg bg-${props.mode} `}>
  <div className="container-fluid"  >
    <Link className="navbar-brand" to="/">TextUtills</Link>
    <button className="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form>
            <div className={`form-check form-switch mx-4 text-${props.mode==='light'?'dark':'light'} `}>
          <input className="form-check-input" onClick={props.toggelMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" forhtml="flexSwitchCheckDefault">Dark Mode</label>
        </div>




        <div className={`form-check form-switch mx-4 text-${props.lightmode==='light'?'green':'light'} `}>
          <input className="form-check-input" onClick={props.toggelGreenMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" forhtml="flexSwitchCheckDefault">Green Dark Mode</label>
        </div>



    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    About: PropTypes.string
  };
  Navbar.defaultProps = {
    title: 'Your Title Here',
    About: "Write about here"
  };