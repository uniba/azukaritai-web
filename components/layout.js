import Head from 'next/head'
import styles from './layout.module.scss'
import Link from 'next/link';

import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';

function AzukaritaiWeb({children}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Azukaritai</title>
        <meta name="viewport" content="width=device-width" />
        {/* <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" /> */}
        <link rel="icon" href="/img/azukaritai_favicon.png" />

      </Head>
      <Header />
      <Navbar />
      <Link href="../pages/about.js">
        <a>
          ABOUT US
        </a>
      </Link>
      <main>{children}</main> 
      <Navbar />
      <Footer />
    </div>
  )
}

export default AzukaritaiWeb
