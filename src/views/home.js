import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>International Response Orchestrator</title>
        <meta
          property="og:title"
          content="International Response Orchestrator"
        />
      </Helmet>
    </div>
  )
}

export default Home
