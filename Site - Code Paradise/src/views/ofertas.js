import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './ofertas.module.css'

const Ofertas = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Ofertas - Travel Agency</title>
        <meta property="og:title" content="Ofertas - Travel Agency" />
      </Helmet>
      <Header rootClassName="rootClassName"></Header>
      <div className={styles['Banner']}>
        <h1 className={styles['text']}>Confira nossas ofertas</h1>
        <span className={styles['text01']}>
          <span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              volutpat turpis.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <span>
            <span>
              Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </span>
      </div>
      <div className={styles['container1']}>
        <div className={styles['PricingCard']}>
          <span className={styles['text08']}>Europa I</span>
          <div className={styles['container2']}>
            <span className={styles['text09']}>
              <span>$</span>
              <span></span>
            </span>
            <span className={styles['text12']}>350</span>
          </div>
          <div className={styles['container3']}>
            <span className={styles['text13']}>
              <span>✔ Londres</span>
            </span>
            <span className={styles['text15']}>
              <span>✔ Amsterdam</span>
            </span>
            <span className={styles['text17']}>
              <span>✔ Roma</span>
            </span>
          </div>
          <Link
            to="/destino"
            className={` ${styles['navlink']} ${projectStyles['button']} `}
          >
            Contrate
          </Link>
        </div>
        <div className={styles['PricingCard1']}>
          <span className={styles['text19']}>Europa II</span>
          <div className={styles['container4']}>
            <span className={styles['text20']}>
              <span>$</span>
              <span></span>
            </span>
            <span className={styles['text23']}>420</span>
          </div>
          <span className={styles['text24']}>
            <span>Válido até 16/06</span>
            <span></span>
          </span>
          <div className={styles['container5']}>
            <span className={styles['text27']}>
              <span>✔ Paris</span>
            </span>
            <span className={styles['text29']}>
              <span>✔ Barcelona</span>
            </span>
            <span className={styles['text31']}>
              <span>✔ Roma</span>
            </span>
          </div>
          <Link
            to="/destino"
            className={` ${styles['navlink1']} ${projectStyles['button']} `}
          >
            Contrate
          </Link>
        </div>
        <div className={styles['PricingCard2']}>
          <span className={styles['text33']}>Volta ao mundo</span>
          <div className={styles['container6']}>
            <span className={styles['text34']}>
              <span>$</span>
              <span></span>
            </span>
            <span className={styles['text37']}>510</span>
          </div>
          <span className={styles['text38']}>
            <span>Válido até 20/04</span>
            <span></span>
          </span>
          <div className={styles['container7']}>
            <span className={styles['text41']}>
              <span>✔ Honolulu</span>
            </span>
            <span className={styles['text43']}>
              <span>✔ Nova York</span>
            </span>
            <span className={styles['text45']}>
              <span>✔ Tokyo</span>
            </span>
            <span className={styles['text47']}>
              <span>✔ Sidney</span>
            </span>
            <span>✔ Hospedagem inclusa</span>
          </div>
          <Link
            to="/destino"
            className={` ${styles['navlink2']} ${projectStyles['button']} `}
          >
            Contrate
          </Link>
        </div>
      </div>
      <Footer rootClassName="rootClassName"></Footer>
    </div>
  )
}

export default Ofertas
