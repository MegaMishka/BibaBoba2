import Head from 'next/head'
import styles from '../styles/Home.module.css'

import content from '../data/posts.json'

export default function Home() {

  const allPosts = content.posts

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <lol className={styles.lol}>
        <h1 className={styles.title}>
          <div className={styles.jij}>Продуктовый</div> <a href="https://www.youtube.com/watch?v=QIlW0ogeUmI">Магазин</a>
        </h1>

        <p className={styles.description}>
          Здесь можно купить еду{' '}
          <code className={styles.code}>Вкусную</code>
          </p>
          <mySearch className={styles.mySearch}>
          <input type="text" name="kye" size="63" maxlength="63"/></mySearch></lol>

        <main className={styles.main}>
        {
          allPosts.map(function(post) {
            return (
              <a href={"/posts/" + post.slug} className={styles.card}>
                <h2>{post.title}</h2>
                <p>{post.slug}</p>
              </a>
            )
          })
        }

        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://i.ytimg.com/vi/8V8aZpPN0CM/maxresdefault.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Сделано ручками{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
