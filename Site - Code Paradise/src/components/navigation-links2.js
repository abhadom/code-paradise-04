import React from 'react'

import PropTypes from 'prop-types'

import styles from './navigation-links2.module.css'

const NavigationLinks2 = (props) => {
  return (
    <nav className={` ${styles['Nav']} ${styles[props.rootClassName]} `}>
      <span className={styles['text']}>{props.text}</span>
      <span className={styles['text1']}>{props.text1}</span>
      <span className={styles['text2']}>{props.text2}</span>
      <span className={styles['text3']}>{props.text3}</span>
      <span className={styles['text4']}>{props.text4}</span>
    </nav>
  )
}

NavigationLinks2.defaultProps = {
  text3: 'Team',
  text2: 'Pricing',
  text1: 'Features',
  rootClassName: '',
  text4: 'Blog',
  text: 'About',
}

NavigationLinks2.propTypes = {
  text3: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
  text: PropTypes.string,
}

export default NavigationLinks2
