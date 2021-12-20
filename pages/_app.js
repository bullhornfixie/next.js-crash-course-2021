import Layout from '../components/Layout.js'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <Layout> 
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp

// Each page will be wrapped into Layout component 
// The styling is determined by home.module.css