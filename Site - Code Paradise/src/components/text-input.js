import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './text-input.module.css'

const TextInput = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <span className={styles['text']}>{props.text}</span>
      <input
        type="text"
        placeholder={props.Input_placeholder}
        className={` ${styles['Input']} ${projectStyles['input']} `}
      />
    </div>
  )
}

TextInput.defaultProps = {
  rootClassName: '',
  text: 'Nome completo:',
  Input_placeholder: 'placeholder',
}

TextInput.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  Input_placeholder: PropTypes.string,
}

export default TextInput
