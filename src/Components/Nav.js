import React from "react"
import hamburger from "./../hamburger.png"

//redux
import {connect } from 'react-redux'
import { changeMessage } from '../Actions/ServiceActions'


function Nav(props){
    const click = (evt) => {
        evt.preventDefault()
        props.changeMessage(evt.target.text)
        document.getElementById(evt.target.id)
    }
    return(
        <div>
            <h1>Navbar</h1>

            {/* Vertical */}
            <nav className="navbar">
                <ul>
                    <li className="active"><a href="#avion" onClick={click}>Metro</a></li>
                    <li><a href="#avion" onClick={click}>Avión</a></li>
                    <li><a href="#avion" onClick={click}>Carro</a></li>
                    <li><a href="#avion" onClick={click}>Barco</a></li>
                </ul>
            </nav>

            {/* Horizontal */}
            <div className="dropdown navbar-hor">
                <button className="dropbtn">
                    <img src={hamburger} alt=""/>
                </button>
                <div className="dropdown-content">
                    <a href="#avion" onClick={click} className="active">Metro</a>
                    <a href="#avion" onClick={click}>Avión</a>
                    <a href="#avion" onClick={click}>Carro</a>
                    <a href="#avion" onClick={click}>Barco</a>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        Service : state.Service
    }
}

const mapDispatchToProps = {
    changeMessage
}

export default connect(mapStateToProps,mapDispatchToProps)(Nav);