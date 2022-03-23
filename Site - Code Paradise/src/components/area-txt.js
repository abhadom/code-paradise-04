import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './area-txt.module.css'

const AreaTxt = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <span className={styles['text']}>{props.text}</span>
      <textarea
        placeholder={props.textarea_placeholder}
        className={` ${styles['textarea']} ${projectStyles['textarea']} `}
      ></textarea>
    </div>
  )
}

AreaTxt.defaultProps = {
  textarea_placeholder: 'placeholder',
  text: 'Mensagem',
  rootClassName: '',
}

AreaTxt.propTypes = {
  textarea_placeholder: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default AreaTxt
