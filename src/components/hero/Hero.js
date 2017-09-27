import React, { Component } from 'react';
import './Hero.css';

class Hero extends Component {
  render() {
    return (
        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                
            <ol className="carousel-indicators">
                <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                <li data-target="#carousel-example-generic" data-slide-to="3"></li>
            </ol>

            <div className="carousel-inner" role="listbox">
                <div className="item active">
                    <img src="../assets/images/travel_hero.jpg" alt=""/>
                    <div className="carousel-caption">
                        <h1>Welcome to My Travel Site</h1>
                        <h2>This site is about places I would like to travel</h2>
                        <h3>Here are some places I would like to visit...</h3>
                    </div>
                </div>

                <div className="item">
                    <img className="hero" src="../assets/images/travel_hero2.jpg" alt=""/>
                    <div className="carousel-caption">
                        <h1>Welcome to My Travel Site</h1>
                        <h2>This site is about places I would like to travel</h2>
                        <h3>Here are some places I would like to visit</h3>
                    </div>
                </div>
                <div className="item">
                    <img className="hero" src="../assets/images/travel_hero3.jpg" alt=""/>
                    <div className="carousel-caption">
                        <h1>Welcome to My Travel Site</h1>
                        <h2>This site is about places I would like to travel</h2>
                        <h3>Here are some places I would like to visit</h3>
                    </div>
                </div>
                <div className="item">
                    <img className="hero" src="../assets/images/travel_hero4.jpg" alt=""/>
                    <div className="carousel-caption">
                        <h1>Welcome to My Travel Site</h1>
                        <h2>This site is about places I would like to travel</h2>
                        <h3>Here are some places I would like to visit</h3>
                    </div>
                </div>
            </div>
            <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
  }
}

export default Hero;