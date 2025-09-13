import React from 'react';
import { Link, NavLink } from 'react-router-dom';


export default function AppNavbar() {
return (
<nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
<div className="container">
<Link className="navbar-brand fw-bold" to="/">✈️ FlightBook</Link>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navContent">
<span className="navbar-toggler-icon" />
</button>


<div className="collapse navbar-collapse" id="navContent">
<ul className="navbar-nav ms-auto">
<li className="nav-item">
<NavLink className="nav-link" to="/">Search</NavLink>
</li>
<li className="nav-item">
<NavLink className="nav-link" to="/dashboard">My Bookings</NavLink>
</li>
</ul>
</div>
</div>
</nav>
);
}