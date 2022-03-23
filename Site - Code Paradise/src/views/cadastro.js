import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import TextInput from '../components/text-input'
import Button from '../components/button'
import Footer from '../components/footer'
import styles from './cadastro.module.css'

const Cadastro = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Cadastro - Travel Agency</title>
        <meta property="og:title" content="Cadastro - Travel Agency" />
      </Helmet>
      <Header rootClassName="rootClassName3"></Header>
      <h1 className={styles['text']}>
        Faça já o seu cadastro e receba ofertas exclusivas
      </h1>
      <span className={styles['text1']}>
        <span>
          Com o seu cadastro, você tem acesso ao seu itinerário e fica por
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br></br>
        <span>
          dentro de todas as nossas ofertas enviadas direto no seu e-mail!
        </span>
      </span>
      <div className={styles['container1']}>
        <div className={styles['container2']}>
          <div className={styles['container3']}>
            <div className={styles['container4']}>
              <div className={styles['container5']}>
                <TextInput
                  rootClassName="rootClassName2"
                  Input_placeholder="Nome Sobrenome"
                ></TextInput>
                <TextInput
                  text="E-mail"
                  rootClassName="rootClassName1"
                  Input_placeholder="exemplo@email.com"
                ></TextInput>
              </div>
              <TextInput
                text="CPF"
                rootClassName="rootClassName"
                Input_placeholder="000.000.000-00"
              ></TextInput>
              <TextInput
                text="Telefone/Celular:"
                rootClassName="rootClassName5"
                Input_placeholder="(00) 12345-6789"
              ></TextInput>
              <TextInput
                text="Senha:"
                rootClassName="rootClassName6"
                Input_placeholder="********"
              ></TextInput>
            </div>
          </div>
          <Button rootClassName="rootClassName1"></Button>
        </div>
        <img
          alt="image"
          src="/playground_assets/green-800h.png"
          className={styles['image']}
        />
        <img
          alt="image"
          src="/playground_assets/peach-800h.png"
          className={styles['image1']}
        />
        <img
          alt="image"
          src="/playground_assets/light%20green-800h.png"
          className={styles['image2']}
        />
      </div>
      <Footer rootClassName="rootClassName5"></Footer>
    </div>
  )
}

export default Cadastro
