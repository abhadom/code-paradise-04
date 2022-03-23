import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import styles from './navigation-links1.module.css'

const NavigationLinks1 = (props) => {
  return (
    <nav className={` ${styles['Nav']} ${styles[props.rootClassName]} `}>
      <Link to="/destino" className={styles['navlink']}>
        {props.text}
      </Link>
      <Link to="/ofertas" className={styles['navlink1']}>
        {props.text1}
      </Link>
      <Link to="/contato" className={styles['navlink2']}>
        {props.text2}
      </Link>
      <Link to="/blog" className={styles['navlink3']}>
        {props.text3}
      </Link>
    </nav>
  )
}

NavigationLinks1.defaultProps = {
  text3: 'Blog',
  rootClassName: '',
  text2: 'Contato',
  text1: 'Ofertas',
  text: 'Destino',
}

NavigationLinks1.propTypes = {
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default NavigationLinks1
