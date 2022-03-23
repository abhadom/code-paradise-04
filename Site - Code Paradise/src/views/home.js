import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import CardsPlaces from '../components/cards-places'
import Servicos from '../components/servicos'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Travel Agency</title>
        <meta property="og:title" content="Travel Agency" />
      </Helmet>
      <div id="main-section" className={styles['Main']}>
        <Header rootClassName="rootClassName4"></Header>
        <div className={styles['Hero']}>
          <div className={styles['Hero1']}>
            <img
              alt="image"
              src="https://images.unsplash.com/flagged/photo-1557443134-e10781e5ea1e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxtYXAlMjB0cmF2ZWx8ZW58MHx8fHwxNjQ3NTQzNzk1&amp;ixlib=rb-1.2.1&amp;w=1500"
              className={styles['image']}
            />
            <div className={styles['container1']}>
              <h1 className={styles['text']}>Econtre sua próxima aventura</h1>
              <h2 className={styles['text01']}>Confira nossos pacotes</h2>
              <div className={styles['BtnGroup']}>
                <Link
                  to="/ofertas"
                  className={` ${styles['navlink']} ${projectStyles['button']} `}
                >
                  Ofertas
                </Link>
                <Link
                  to="/blog"
                  className={` ${styles['navlink1']} ${projectStyles['button']} `}
                >
                  Blog
                </Link>
              </div>
              <span className={styles['text02']}>
                <span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    non volutpat turpis.
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
                    Mauris luctus rutrum mi ut rhoncus. Integer in dignissim
                    tortor. Lorem
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
                    ipsum dolor sit amet, consectetur adipiscing elit.
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
                <br></br>
                <span></span>
                <br></br>
                <span>
                  <span>
                    Mauris luctus rutrum mi ut rhoncus. Integer in dignissim
                    tortor.
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
          </div>
        </div>
        <h1 className={styles['text16']}>Mais visitados</h1>
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
            rootClassName="rootClassName"
          ></CardsPlaces>
        </div>
        <div className={styles['Features']}>
          <h1 className={styles['text17']}>
            <span>Nossos serviços</span>
          </h1>
          <div className={styles['Separator']}></div>
          <div className={styles['container2']}>
            <div className={styles['container3']}>
              <Servicos
                title="Passagens Aéreas"
                rootClassName="rootClassName1"
              ></Servicos>
              <Servicos
                title="Hospedagem"
                rootClassName="rootClassName4"
              ></Servicos>
              <Servicos
                title="Carros de Aluguel"
                rootClassName="rootClassName3"
              ></Servicos>
              <Servicos
                title="Cashback"
                rootClassName="rootClassName2"
              ></Servicos>
            </div>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1511401139252-f158d3209c17?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxjb3p5fGVufDB8fHx8MTY0NzQ3MTk1MQ&amp;ixlib=rb-1.2.1&amp;w=500"
              className={styles['image1']}
            />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
