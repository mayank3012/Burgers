import React,{Component} from 'react';
import './css/app.css';
import signature from './img/jessica-signature.png'
import img_user1 from './img/testmonial/1.png'
import img_user2 from './img/testmonial/2.png'
import img_user3 from './img/testmonial/3.png'


var myIndex = 0;

function carousel(num) {
    var i;
    var x = document.getElementsByClassName("slide-testimonial");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex+=num;
    if (myIndex > x.length) {myIndex = 1}
    if (myIndex < 1) {myIndex = x.length}    
    x[myIndex-1].style.display = "block";  
  }

class about extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    componentDidMount(){
        carousel(1);
    }


    render() {
        return (
            <div>
            <div id="about">
                <div>
                    <div className="about-img1">
                        <div className="about-img2"></div>
                    </div>
                    <div id="abouts" className="about-text-colom">
                        <span className="burger-menu-heading burger-menu-heading1">about us</span>
                        <div><h1>BEST BURGER<br/>
                            IN YOUR CITY</h1>
                            There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered alteration in some form,
                            by injected humour, or randomised words which don't look even slightly believable.
                            If you are going to use a passage of Lorem Ipsum,
                            you need to be sure there isn't anything embarrassing hidden in the middle of text.
                            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                            making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,
                            combined with a handful of model sentence structures, to generate
                        </div>
                        <img src={signature} alt="signature"/>
                    </div>
                </div>
            </div>
            <div className="video"><div>
                    <h1>BURGER <br/> BACHELOR</h1>
                    <h3>How we make delicious Burger</h3>
                    <i class="fa fa-play-circle play"></i>
                </div></div>

            <div className="testimonial">
                <span className="burger-menu-heading">Testimonials</span>
                <h1>HAPPY CUSTOMER</h1>
                <div className="testimonial-slider">
                    <div className="slides">
                    <div className="slider right"><i onClick={()=>carousel(-1)} class="fa fa-chevron-circle-left" aria-hidden="true"></i></div>
                    <div className="slider left"><i onClick={()=>carousel(1)} class="fa fa-chevron-circle-right" aria-hidden="true"></i></div>
                    <div className="slide-testimonial">
                        <span>“La muerte no existe, la gente solo muere cuando la olvidan; si puedes recordarme siempre estaré contigo”</span>
                        <img src={img_user1} alt="user"/>
                        <h3>name</h3>
                    </div>
                    <div className="slide-testimonial">
                        <span>“La muerte no existe, la gente solo muere cuando la olvidan; si puedes recordarme siempre estaré contigo”</span>
                        <img src={img_user2} alt="user"/>
                        <h3>name</h3>
                    </div>
                    <div className="slide-testimonial">
                        <span>“La muerte no existe, la gente solo muere cuando la olvidan; si puedes recordarme siempre estaré contigo”</span>
                        <img src={img_user3} alt="user"/>
                        <h3>name</h3>
                    </div>
                    </div>
                </div>
            </div>
            <div className="insta">
            <a className="colom insta1" href="#home">
                    <div className="insta-overlay"><i className="fa fa-instagram"></i></div>
                </a>
                <a className="colom insta2" href="#home">
                    <div className="insta-overlay"><i className="fa fa-instagram"></i></div>
                </a>
                <a className="colom insta3" href="#home">
                    <div className="insta-overlay"><i className="fa fa-instagram"></i></div>
                </a>
                <a className="colom insta4" href="#home">
                    <div className="insta-overlay"><i className="fa fa-instagram"></i></div>
                </a>
            </div>
                
        </div>

        )
    }
}

export default about;

