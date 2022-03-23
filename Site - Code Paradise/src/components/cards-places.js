import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import Button2 from './button2'
import styles from './cards-places.module.css'

const CardsPlaces = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <img
        alt={props.image_alt}
        src={props.image}
        className={styles['image']}
      />
      <div className={styles['container1']}>
        <span className={styles['text']}>{props.city}</span>
        <span className={styles['text1']}>{props.description}</span>
        <Link to="/destino" className={styles['navlink']}>
          <Button2 button1="Contrate" className={styles['component']}></Button2>
        </Link>
      </div>
    </div>
  )
}

CardsPlaces.defaultProps = {
  image:
    'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=300',
  image_alt: 'image',
  city: 'City Name',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  rootClassName: '',
}

CardsPlaces.propTypes = {
  image: PropTypes.string,
  image_alt: PropTypes.string,
  city: PropTypes.string,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default CardsPlaces
