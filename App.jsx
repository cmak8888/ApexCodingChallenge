import React, { Component } from 'react';
import Countries from 'countries-api';
import './App.css';
import Pagination from './components/Pagination';

class App extends Component {
  state = { allCountries: [], currentCountries: [], currentPage: null, totalPages: null }

  componentDidMount() {
    const { data: allCountries = [] } = Countries.findAll();
    this.setState({ allCountries });
  }

  onPageChanged = data => {
    const { allCountries } = this.state;
    const { currentPage, totalPages, pageLimit } = data;
    const offset = (currentPage - 1) * pageLimit;
    const currentCountries = allCountries.slice(offset, offset + pageLimit);

    this.setState({ currentPage, currentCountries, totalPages });
  }
}

export default App;