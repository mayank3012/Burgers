import React, { Component } from 'react'
import './css/app.css'

var myIndex = 0;

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 5000); // Change image every 5 seconds
  }

class slideShow extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    componentDidMount(){
        carousel();
    }

    render() {
        return (
            <div id="home" className="slideshow">
                <div className="slides">
                    <div className="mySlides img1 animate__animated animate__fadeIn"></div>
                    <div className="mySlides img2 animate__animated animate__fadeIn"></div>
                </div>
                <div className="info">
                    <div className="bigdeal">Big Deal</div>
                    <div className="burgerbachelor"><b>BURGER BACHELOR</b></div>
                    <div className="maxican"><span className="first">m</span>axican</div>
                </div>
            </div>
        )
    }
}

export default slideShow
