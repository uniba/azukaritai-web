import Layout from '../components/layout'
import '../styles/globals.scss'
import 'modern-css-reset/dist/reset.min.css'

export default function MyApp({Component, pageProps}) {
  return (
    <Layout Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
