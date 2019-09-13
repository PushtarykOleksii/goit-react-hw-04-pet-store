/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './SinglePatPage.module.css';

const SinglePetPage = ({ name, image, breed, gender, color, description }) => {
  return (
    <section className={styles.container}>
      <div>
        <Link to="/pets">
          <button className={styles.button} type="button">
            Back
          </button>
        </Link>
        <h3>all about {name}</h3>
      </div>
      <div className={styles.picturediv}>
        <div className={styles.div}>
          <img className={styles.picture} src={image} alt="pet card" />
          <div>
            <div className={styles.div}>
              <span>Breed: </span>
              <span>{breed}</span>
            </div>
            <div className={styles.div}>
              <span>Gender: </span>
              <span>{gender}</span>
            </div>
            <div className={styles.div}>
              <span>Color: </span>
              <span>{color}</span>
            </div>
          </div>
        </div>
        <p>{description}</p>
      </div>
    </section>
  );
};
SinglePetPage.propTypes = {
  breed: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default SinglePetPage;
