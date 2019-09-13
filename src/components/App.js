import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import AboutPage from './AboutPage/AboutPage';
import GalleryPage from './GalleryPage/GalleryPage';
import PetPage from './PetPage/PetPage';
import NavHeader from './NavHeader/NavHeader';
import styles from './App.module.css';

export default class App extends Component {
  state = {};

  render() {
    return (
      <div className={styles.container}>
        <NavHeader />
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/pets/:id" component={PetPage} />
            <Route path="/pets" component={GalleryPage} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}
