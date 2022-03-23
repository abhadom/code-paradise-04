import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import TextInput from '../components/text-input'
import AreaTxt from '../components/area-txt'
import Button from '../components/button'
import Footer from '../components/footer'
import styles from './contato.module.css'

const Contato = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Contato - Travel Agency</title>
        <meta property="og:title" content="Contato - Travel Agency" />
      </Helmet>
      <Header rootClassName="rootClassName1"></Header>
      <h1 className={styles['text']}>Tire suas dúvidas</h1>
      <div className={styles['container1']}>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1488509082528-cefbba5ad692?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHBob25lfGVufDB8fHx8MTY0NzU0MTAwNg&amp;ixlib=rb-1.2.1&amp;w=200"
          className={styles['image']}
        />
        <div className={styles['container2']}>
          <h1 className={styles['text01']}>Entre em contato</h1>
          <div className={styles['container3']}>
            <span className={styles['text02']}>Telefone: (11) 1234-5678</span>
            <span className={styles['text03']}>Celular: (11) 91234-5678</span>
            <span className={styles['text04']}>
              E-mail: codeparadise@email.com
            </span>
            <span className={styles['text05']}>
              Bryan St, Unit 210, San Francisco, CA 94107
            </span>
          </div>
        </div>
      </div>
      <div className={styles['container4']}>
        <h1 className={styles['text06']}>Mande sua dúvida</h1>
        <TextInput
          text="Nome*:"
          rootClassName="rootClassName4"
          Input_placeholder="Jane"
        ></TextInput>
        <TextInput
          text="E-mail*:"
          rootClassName="rootClassName3"
          Input_placeholder="exemplo@email.com"
        ></TextInput>
        <AreaTxt
          text="Mensagem*:"
          rootClassName="rootClassName"
          textarea_placeholder="Até 300 caracteres"
        ></AreaTxt>
        <Button button="Enviar" rootClassName="rootClassName"></Button>
        <span className={styles['text07']}>
          <span>*necessário preencher</span>
          <span></span>
        </span>
      </div>
      <div className={styles['container5']}>
        <div className={styles['container6']}>
          <img
            alt="image"
            src="/playground_assets/green-300w.png"
            className={styles['image1']}
          />
          <img
            alt="image"
            src="/playground_assets/light%20green-400w.png"
            className={styles['image2']}
          />
        </div>
        <img
          alt="image"
          src="/playground_assets/peach-600w.png"
          className={styles['image3']}
        />
      </div>
      <img
        alt="image"
        src="/playground_assets/peach-600w.png"
        className={styles['image4']}
      />
      <img
        alt="image"
        src="/playground_assets/green-300w.png"
        className={styles['image5']}
      />
      <img
        alt="image"
        src="/playground_assets/light%20green-400w.png"
        className={styles['image6']}
      />
      <Footer rootClassName="rootClassName2"></Footer>
    </div>
  )
}

export default Contato
