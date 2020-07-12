import React, { Component } from 'react'
import './css/app.css'
import logo from './images/logo.png'

class nav extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
          if ( window.scrollY > 200) {
              document.getElementById('nav').style.backgroundColor='black';
            }
          else{
            document.getElementById('nav').style.backgroundColor='rgba(0, 0, 0, 0.2)';
            }
        });
    }

    render() {
        return (
            <div className="navigation" id="nav">
                <span className="nav-items">
                    <a className="navigation-item" href="#home">Home</a>
                    <a className="navigation-item" href="#menu">Menu</a>
                    <a className="navigation-item" href="#abouts">About</a>
                    <a className="navigation-item" href="#contacts">Contact</a>
                </span>
                <span className="logo">
                    <img src={logo} alt="logoBurger"/>
                </span>
                <span className="social">
                    <i className="fa fa-facebook-f" aria-hidden="true"></i>
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                    <i className="fa fa-google-plus" aria-hidden="true"></i>
                </span>
                <span className="mobile">
                    +91-9876543210
                </span>
            </div>
        )
    }
}

export default nav
