import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation/Navigation'
import Hero from './components/hero/Hero'
import Cards from './components/cards/Cards'
import Table from './components/table/Table'
import Footer from './components/footer/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />

        <Hero />

        <div className="card" >
        <Cards image="assets/images/aruba_flag.svg" country="Aruba" link="http://www.arubatourism.com/" linktext="Aruba Tourism Site" />
        <Cards image="assets/images/chile_flag.svg" country="Chile" link="http://chile.travel/en/" linktext="Chile Tourism Site" />
        <Cards image="assets/images/italy_flag.svg" country="Italy" link="http://www.italia.it/en/home.html" linktext="Italy Tourism Site" />
        <Cards image="assets/images/spain_flag.svg" country="Spain" link="http://www.spain.info/en_US/" linktext="Spain Tourism Site" />
        </div>

        <h3 id="tableheader">Some information about the places I would like to visit</h3>

        <table className="table">
          <tr>
            <th>Destination</th>
            <th>Capital</th>
            <th>Official Language</th>
            <th>Population (approx)</th>
            <th>National Bird</th>
          </tr>
          <Table country="Aruba" capital="Oranjestad" language="Dutch" population="102,911" bird="Aruban Burrowing Owl" />
          <Table country="Chile" capital="Santiago" language="Spanish" population="17.62million" bird="Andean Condor" />
          <Table country="Italy" capital="Rome" language="Italian" population="59.83 million" bird="Bluebird" />
          <Table country="Spain" capital="Madrid" language="Spanish" population="46.77 million" bird="Eagle" />
        </table>

        <Footer />

      </div>
    );
  }
}

export default App;
