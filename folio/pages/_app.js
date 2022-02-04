import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import Navigation from '../components/navBar'



function MyApp({ Component, pageProps }) {

  return <div>
    <Navigation />
    <Component {...pageProps}/>
  </div>
}

export default MyApp