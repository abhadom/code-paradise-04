import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './button2.module.css'

const Button2 = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <button
        className={` ${styles['button']} ${projectStyles['button']} ${projectStyles['button']} `}
      >
        {props.button1}
      </button>
    </div>
  )
}

Button2.defaultProps = {
  button1: 'Button',
  rootClassName: '',
}

Button2.propTypes = {
  button1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Button2
