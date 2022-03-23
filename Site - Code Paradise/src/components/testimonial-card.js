import React from 'react'

import PropTypes from 'prop-types'

import styles from './testimonial-card.module.css'

const TestimonialCard = (props) => {
  return (
    <header
      className={` ${styles['TestimonialCard']} ${
        styles[props.rootClassName]
      } `}
    >
      <svg viewBox="0 0 1024 1024" className={styles['icon']}>
        <path d="M800 640c-123.712 0-224-100.29-224-224 0-123.712 100.288-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.634-11.636 22.252-24.016 31.83-37.020-11.438 1.8-23.16 2.746-35.104 2.746zM224 640c-123.71 0-224-100.29-224-224 0-123.712 100.29-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.636-11.636 22.254-24.016 31.832-37.020-11.44 1.8-23.16 2.746-35.106 2.746z"></path>
      </svg>
      <div className={styles['Testimonial']}>
        <span className={styles['text']}>{props.quote}</span>
        <img
          alt={props.picture_alt}
          src={props.image_src}
          className={styles['image']}
        />
        <span className={styles['text1']}>{props.name}</span>
      </div>
    </header>
  )
}

TestimonialCard.defaultProps = {
  image_src:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdHxlbnwwfHx8fDE2MjYzNzg5NzI&ixlib=rb-1.2.1&h=1200',
  rootClassName: '',
  picture_alt: 'profile',
  quote:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.  Nam pellentesque nulla leo, sagittis vehicula sem commodo nec.',
  name: 'John Doe',
}

TestimonialCard.propTypes = {
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  picture_alt: PropTypes.string,
  quote: PropTypes.string,
  name: PropTypes.string,
}

export default TestimonialCard
