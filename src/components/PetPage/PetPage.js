/* eslint-disable react/no-deprecated */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SinglPatPage from '../SinglePatPage/SinglePatPage';
import items from '../pets.json';

export default class PetPage extends Component {
  state = {
    chosenPen: {},
  };

  componentDidMount() {
    const chosenPen = items.find(
      // eslint-disable-next-line react/destructuring-assignment
      pet => pet.id === this.props.match.params.id,
    );
    this.setState({ chosenPen });
  }

  render() {
    const { chosenPen } = this.state;
    return (
      <div>
        {chosenPen ? <SinglPatPage {...chosenPen} /> : <h1>No such animal!</h1>}
      </div>
    );
  }
}

PetPage.propTypes = {
  items: PropTypes.arrayOf().isRequired,
};
