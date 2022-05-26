import { useState } from "react";
import logo from "../icons/weather-icon.png"
import "../App.css"

function SideNav() {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark" >
            <div className="container-fluid" >
                <a class="navbar-brand container " href="#">
                    <img src={logo} alt="Weather logo" className="img-fluid img-logo"/>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                    <ul class="navbar-nav gap-3">
                        <li class="nav-item">
                            <button type="button" class="btn btn-secondary">Today's weather</button>
                        </li>
                        <li class="nav-item">
                            <button type="button" class="btn btn-primary">Next 5 days</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default SideNav;