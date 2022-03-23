import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import CardsPlaces from '../components/cards-places'
import Footer from '../components/footer'
import styles from './destino.module.css'

const Destino = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Destino - Travel Agency</title>
        <meta property="og:title" content="Destino - Travel Agency" />
      </Helmet>
      <Header rootClassName="rootClassName2"></Header>
      <h2 className={styles['text']}>
        <span>Descubra novos caminhos</span>
      </h2>
      <div className={styles['Banner']}></div>
      <div className={styles['Cards-container']}>
        <CardsPlaces
          city="Londres"
          image="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGxvbmRvbnxlbnwwfHx8fDE2NDc0Nzg2MDc&amp;ixlib=rb-1.2.1&amp;w=300"
        ></CardsPlaces>
        <CardsPlaces
          city="Roma"
          image="https://images.unsplash.com/photo-1603199766980-fdd4ac568a11?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxyb21lfGVufDB8fHx8MTY0NzQ3ODU4OQ&amp;ixlib=rb-1.2.1&amp;w=300"
        ></CardsPlaces>
        <CardsPlaces
          city="Honolulu"
          image="https://images.unsplash.com/photo-1598135753163-6167c1a1ad65?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fGhhd2FpaXxlbnwwfHx8fDE2NDc0Nzg2Mzg&amp;ixlib=rb-1.2.1&amp;w=300"
          rootClassName="rootClassName4"
        ></CardsPlaces>
        <CardsPlaces
          city="Paris"
          image="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHBhcmlzfGVufDB8fHx8MTY0NzQ3ODY4OQ&amp;ixlib=rb-1.2.1&amp;w=300"
        ></CardsPlaces>
        <CardsPlaces
          city="Amsterdam"
          image="https://images.unsplash.com/photo-1576924542622-772281b13aa8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxhbXN0ZXJkYW18ZW58MHx8fHwxNjQ3NDc4NzIy&amp;ixlib=rb-1.2.1&amp;w=300"
        ></CardsPlaces>
        <CardsPlaces
          city="Barcelona"
          image="https://images.unsplash.com/photo-1528744598421-b7b93e12df15?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fGJhcmNlbG9uYXxlbnwwfHx8fDE2NDc0Nzg3NDU&amp;ixlib=rb-1.2.1&amp;w=300"
        ></CardsPlaces>
        <CardsPlaces
          city="Nova York"
          image="https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fG5ldyUyMHlvcmt8ZW58MHx8fHwxNjQ3NDc5MTA5&amp;ixlib=rb-1.2.1&amp;w=300"
        ></CardsPlaces>
        <CardsPlaces
          city="Tokyo"
          image="https://images.unsplash.com/photo-1528164344705-47542687000d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxqYXBhbnxlbnwwfHx8fDE2NDc0NzkwMjE&amp;ixlib=rb-1.2.1&amp;w=300"
        ></CardsPlaces>
        <CardsPlaces
          city="Sidney"
          image="https://images.unsplash.com/photo-1527048272542-01226422db13?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fHNpZG5leXxlbnwwfHx8fDE2NDc0NzkzMzg&amp;ixlib=rb-1.2.1&amp;w=300"
        ></CardsPlaces>
      </div>
      <Footer rootClassName="rootClassName1"></Footer>
    </div>
  )
}

export default Destino
