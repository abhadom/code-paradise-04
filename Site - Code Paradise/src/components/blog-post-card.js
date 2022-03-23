import React from 'react'

import PropTypes from 'prop-types'

import styles from './blog-post-card.module.css'

const BlogPostCard = (props) => {
  return (
    <div
      className={` ${styles['BlogPostCard']} ${styles[props.rootClassName]} `}
    >
      <img
        alt={props.image_alt}
        src={props.image_src1}
        className={styles['image']}
      />
      <div className={styles['container']}>
        <span className={styles['text']}>{props.label}</span>
        <h1 className={styles['text1']}>{props.title}</h1>
        <div className={styles['container1']}>
          <span className={styles['text2']}>{props.description}</span>
          <span className={styles['text3']}>Read More</span>
        </div>
        <span className={styles['text4']}>{props.author}</span>
      </div>
    </div>
  )
}

BlogPostCard.defaultProps = {
  rootClassName: '',
  title: 'Lorem ipsum dolor sit amet',
  author: 'by Jon Doe 5 hours ago',
  label: 'ENTERPRISE',
  image_src1:
    'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvcmtpbmclMjBkZXNrfGVufDB8fHx8MTYyNjI1MDYwMg&ixlib=rb-1.2.1&w=1500',
  image_alt: 'image',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
}

BlogPostCard.propTypes = {
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  label: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt: PropTypes.string,
  description: PropTypes.string,
}

export default BlogPostCard
