import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import BlogPostCard from '../components/blog-post-card'
import Footer from '../components/footer'
import styles from './blog.module.css'

const Blog = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Blog - Travel Agency</title>
        <meta property="og:title" content="Blog - Travel Agency" />
      </Helmet>
      <Header rootClassName="rootClassName5"></Header>
      <div className={styles['Blog']}>
        <div className={styles['container1']}>
          <BlogPostCard
            label="DICAS"
            title="Dicas para se organizar melhor"
            author="by Jon Doe, há 5 horas"
            rootClassName="rootClassName1"
          ></BlogPostCard>
        </div>
        <div className={styles['container2']}>
          <BlogPostCard
            label="DICAS"
            title="Como arrumar a mala?"
            author="by Molly Doe, 12/12/21"
            image_src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fHdvcmt8ZW58MHx8fHwxNjI2NDUwNzky&amp;ixlib=rb-1.2.1&amp;h=1000"
            image_src1="https://images.unsplash.com/photo-1557183200-f0fec6612738?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxzdWl0Y2FzZXxlbnwwfHx8fDE2NDc1NjA2NzM&amp;ixlib=rb-1.2.1&amp;w=1500"
            rootClassName="rootClassName2"
          ></BlogPostCard>
        </div>
        <BlogPostCard
          label="HOTÉIS"
          title="Escolha o hotel ideal pra você"
          author="by Jane Doe, 20/05/21"
          image_src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHx3b3JrJTIwb2ZmaWNlfGVufDB8fHx8MTYyNjQ1MDgzMQ&amp;ixlib=rb-1.2.1&amp;h=1000"
          image_src1="https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?ixid=Mnw5MTMyMXwxfDF8c2VhcmNofDF8fGhvdGVsfGVufDB8fHx8MTY0NzU2MDc4NQ&amp;ixlib=rb-1.2.1&amp;w=1500"
          rootClassName="rootClassName"
        ></BlogPostCard>
      </div>
      <Footer rootClassName="rootClassName3"></Footer>
    </div>
  )
}

export default Blog
