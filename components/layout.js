import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'

function AzukaritaiWeb({children}) {
  return (
    <div>
      <Head>
        <title>Azukaritai</title>
        <meta name="viewport" content="width=device-width" />
        {/* <meta
          property="og:image"d
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" /> */}
        <link rel="icon" href="/img/azukaritai_favicon.png" />
      </Head>
      <Header />
      <main className="l-wrap">{children}</main>
      <Footer />
    </div>
  )
}

export default AzukaritaiWeb
