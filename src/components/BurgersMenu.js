import React from 'react';
import './css/app.css';
import img1 from './images/burger/1.png';
import img2 from './images/burger/2.png';
import img3 from './images/burger/3.png';
import img4 from './images/burger/4.png';
import img5 from './images/burger/5.png';
import img6 from './images/burger/6.png';
import img7 from './images/burger/7.png';
import img8 from './images/burger/8.png';
import img9 from './images/burgers/1-compressed (2).jpg';
import img10 from './images/burgers/2-compressed (2).jpg';




function BurgersMenu() {
    return (
        <div id="menu" className="burger-menu">
            <div className="burger-menu-heading">Burger Menu</div>
            <div className="burger-menu-subheading">BEST EVER BURGERS</div>

            <div>                
                <div className="menu-col">
                    <div className="menu-div-photo"><img src={img1} alt="img" /></div>
                    <div className="menu-div-text">
                        <h1>Burger Bizz</h1>
                        <span>Great way to make your business appear trust and relevant.</span>
                        <h2>$5</h2>
                    </div>
                </div> 
                
                <div className="menu-col menu-col-odd">
                    <div className="menu-div-photo"><img src={img2} alt="img" /></div>
                    <div className="menu-div-text">
                        <h1>Burger Bizz</h1>
                        <span>Great way to make your business appear trust and relevant.</span>
                        <h2>$5</h2>
                    </div>
                </div>

                <div className="menu-col">
                    <div className="menu-div-photo"><img src={img3} alt="img" /></div>
                    <div className="menu-div-text">
                        <h1>Burger Bizz</h1>
                        <span>Great way to make your business appear trust and relevant.</span>
                        <h2>$5</h2>
                    </div>
                </div> 

                <div className="menu-col menu-col-odd">
                    <div className="menu-div-photo"><img src={img4} alt="img" /></div>
                    <div className="menu-div-text">
                        <h1>Burger Bizz</h1>
                        <span>Great way to make your business appear trust and relevant.</span>
                        <h2>$5</h2>
                    </div>
                </div>
            </div>

            
            <div>
                <div className="menu-col">
                    <div className="menu-div-photo"><img src={img5} alt="img" /></div>
                    <div className="menu-div-text">
                        <h1>Burger Bizz</h1>
                        <span>Great way to make your business appear trust and relevant.</span>
                        <h2>$5</h2>
                    </div>
                </div> 

                <div className="menu-col menu-col-odd">
                    <div className="menu-div-photo"><img src={img6} alt="img" /></div>
                    <div className="menu-div-text">
                        <h1>Burger Bizz</h1>
                        <span>Great way to make your business appear trust and relevant.</span>
                        <h2>$5</h2>
                    </div>
                </div>
            </div>


            <div>
                <div className="menu-col">
                    <div className="menu-div-photo"><img src={img7} alt="img" width="90%"/></div>
                    <div className="menu-div-text">
                        <h1>Burger Bizz</h1>
                        <span>Great way to make your business appear trust and relevant.</span>
                        <h2>$5</h2>
                    </div>
                </div> 

                <div className="menu-col menu-col-odd">
                    <div className="menu-div-photo"><img src={img8} alt="img" width="90%"/></div>
                    <div className="menu-div-text">
                        <h1>Burger Bizz</h1>
                        <span>Great way to make your business appear trust and relevant.</span>
                        <h2>$5</h2>
                    </div>
                </div>
            </div>

            <a href="#menu" className="more-btn">More Item</a>
            <div className="menu-buy-now">
                <div className="pics">
                    <img src={img9} width="100%" alt="img"/>
                    <div className="info">
                        <div className="info-data">
                        <h2>$20</h2>
                        <span className="head">The Burger President</span>
                        <div className="about-dish">Great way to make your business appear trust
                        and relevant.</div>
                        <a href="#home">Order Now</a>
                        </div>
                    </div>
                </div>
                <div className="pics">
                    <img src={img10} width="100%"  height= "100%" alt="img"/>
                    <div className="info">
                        <div className="info-data">
                        <h2>$20</h2>
                        <span className="head">The Burger President</span>
                        <div className="about-dish">Great way to make your business appear trust
                        and relevant.</div>
                        <a href="#home">Order Now</a>
                        </div>
                    </div>
                </div>
            </div>

            </div>
    )
}

export default BurgersMenu;
