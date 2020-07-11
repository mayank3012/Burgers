import React, { Component } from 'react'
import './css/app.css'
import logo from './img/logo.png'

function open(){
    document.getElementById('mobile-navigation').style.display="block";    
    document.getElementById('open-bar').style.display="none";
    document.getElementById('close').style.display="inline-block";
    document.getElementById('mobile-navigation').classList.add('animate__backInDown');
}
function close(){
    document.getElementById('mobile-navigation').style.display="none";    
    document.getElementById('open-bar').style.display="inline-block";
    document.getElementById('close').style.display="none";
    
}


class mobilenavigation extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
          if ( window.scrollY > 200) {
              document.getElementById('mobile-navigation-bar').style.backgroundColor='black';
              document.getElementById('mobile-navigation').style.backgroundColor='black';
            }
          else{
            document.getElementById('mobile-navigation-bar').style.backgroundColor='rgba(0, 0, 0, 0.2)';
            document.getElementById('mobile-navigation').style.backgroundColor='rgba(0, 0, 0, 0.1)';
            }
        });
    }

    render() {
        return (
            <>
            <div id="mobile-navigation-bar" >
                <span><img src={logo} alt="logo" height="40px" /></span>
                <span>
                    <span id="open-bar" onClick={open}><i className="fa fa-bars" aria-hidden="true"></i></span>
                <span onClick={close} id="close" className="animate__animated animate__rotateIn">&times;</span>
                </span>
            <div id="mobile-navigation" className="animate__animated ">
                <a href="#home">Home</a>
                <a href="#menu">Menu</a>
                <a href="#abouts">About</a>
                <a href="#contacts">Contact</a>
            </div>
            </div>
            </>    
            
        )
    }
}

 export default mobilenavigation
