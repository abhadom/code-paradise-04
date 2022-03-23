import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import TextInput from '../components/text-input'
import Button from '../components/button'
import Footer from '../components/footer'
import styles from './login.module.css'

const Login = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Login - Travel Agency</title>
        <meta property="og:title" content="Login - Travel Agency" />
      </Helmet>
      <Header rootClassName="rootClassName7"></Header>
      <div className={styles['container1']}>
        <h1 className={styles['text']}>
          <span>Login</span>
        </h1>
        <TextInput
          text="E-mail"
          rootClassName="rootClassName7"
          Input_placeholder="exemplo@email.com"
        ></TextInput>
        <TextInput
          text="Senha"
          rootClassName="rootClassName8"
          Input_placeholder="********"
        ></TextInput>
        <Button button="Entrar" rootClassName="rootClassName2"></Button>
      </div>
      <Footer rootClassName="rootClassName6"></Footer>
    </div>
  )
}

export default Login
