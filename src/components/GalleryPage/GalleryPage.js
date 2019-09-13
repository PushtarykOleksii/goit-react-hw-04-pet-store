/* eslint-disable react/no-deprecated */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import items from '../pets.json';
import styles from './GalleryPage.module.css';

const GalleryPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.page}>Awailable Pats</h2>
      <ul className={styles.list}>
        {items.map(item => (
          <li key={item.id} className={styles.listItem}>
            <Link to={`pets/${item.id}`}>
              <img src={item.image} alt={item.name} className={styles.image} />
              <p className={styles.name}>{item.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

GalleryPage.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
export default GalleryPage;
