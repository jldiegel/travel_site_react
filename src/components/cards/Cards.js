import React, { Component } from 'react';
import './Cards.css';

class Cards extends Component {
  render() {
    return (
     
        <div className="row">
            <div className="flags">
                <img className="flag" src={this.props.image} alt=""/>
                <h2 className="country">{this.props.country}</h2>
                <a href={this.props.link} target="_blank">{this.props.linktext}</a>
            </div>
        </div>
    );
  }
}

export default Cards;