import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import Navigation from '../components/navBar'
import Head from "next/head";


function MyApp({ Component, pageProps }) {

  return <div>
    <Head>
        <title>Pycheche - Portafolios de evidencias</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-icon" href="/images/nanduti.png"></link>
      </Head>

    <Component {...pageProps}/>
  </div>
}

export default MyApp