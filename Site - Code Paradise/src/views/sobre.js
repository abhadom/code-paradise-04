import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import TestimonialCard from '../components/testimonial-card'
import Footer from '../components/footer'
import styles from './sobre.module.css'

const Sobre = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Sobre - Travel Agency</title>
        <meta property="og:title" content="Sobre - Travel Agency" />
      </Helmet>
      <Header rootClassName="rootClassName6"></Header>
      <div className={styles['Testimonial']}>
        <h1 className={styles['text']}>
          <span>Sobre Nós</span>
        </h1>
        <span className={styles['text2']}>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in
            dignissim tortor.
          </span>
        </span>
        <div className={styles['container1']}>
          <TestimonialCard
            name="Jane Doe"
            image_src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fGdpcmx8ZW58MHx8fHwxNjQ3NTYzNjcw&amp;ixlib=rb-1.2.1&amp;h=200"
            picture_alt="profile"
            rootClassName="rootClassName"
          ></TestimonialCard>
          <TestimonialCard
            name="Molly Doe"
            image_src="https://images.unsplash.com/photo-1520512202623-51c5c53957df?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fGdpcmwlMjBibG9uZGV8ZW58MHx8fHwxNjQ3NTYzNzcw&amp;ixlib=rb-1.2.1&amp;h=200"
            picture_alt="profile"
            picture_src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxtYW58ZW58MHx8fHwxNjI2NDUyMDM1&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName"
          ></TestimonialCard>
          <TestimonialCard
            name="Jon Doe"
            image_src="https://images.unsplash.com/photo-1504199367641-aba8151af406?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDU5fHxtYW4lMjBzbWlsZXxlbnwwfHx8fDE2NDc1NjM4NTI&amp;ixlib=rb-1.2.1&amp;h=200"
            picture_alt="profile"
            picture_src="https://images.unsplash.com/photo-1546456073-ea246a7bd25f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fGJsYWNrJTIwbWFufGVufDB8fHx8MTYyNjQ1MjAwOA&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName"
          ></TestimonialCard>
        </div>
      </div>
      <Footer rootClassName="rootClassName4"></Footer>
    </div>
  )
}

export default Sobre
