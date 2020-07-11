import React, { Component } from 'react'
import './css/app.css';

class Contactus extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <footer id="contacts">
                <div className="footer_top">
                    <div className="footer-row">
                        <div className="footer-col">
                            <h2>New York</h2>
                            <span>5th flora, 700/D kings road,
                            green lane New York-1782
                            info@burger.com</span>

                            <h3>+10 378 483 6782</h3>
                        </div>
                        <div className="footer-col">
                            <h2>California</h2>
                            <span>5th flora, 700/D kings road,
                            green lane New York-1782
                            info@burger.com</span>

                            <h3>+10 378 483 6782</h3>

   
                        </div>
                        <div className="footer-col mail">
                            <h2>Stay Connected</h2>
                            <span className="text-box"><input type="text" placeholder="Enter Your Email"/><button>Sign Up</button></span>
                            <div className="stay-connected" >Stay connect with us to get exclusive offer!</div>
                        </div>
                    </div>
                    <div className="social">
                        <a href="#home"><i className="fa fa-facebook-f footer-social"></i></a>
                        <a href="#home"><i className="fa fa-instagram footer-social"></i></a>
                        <a href="#home"><i className="fa fa-twitter footer-social"></i></a>
                        <a href="#home"><i className="fa fa-google-plus footer-social"></i></a>
                    </div>
                </div>
                <div className="regards">
                    <hr/>
                    <span>Copyright ©2020 All rights reserved | This template is made with <i class="fa fa-heart-o"></i> by <span className="name">MAYANK PANDET</span></span>
                </div>
            </footer>
        )
    }
}

export default Contactus;
