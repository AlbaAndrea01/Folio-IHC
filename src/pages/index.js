import Head from 'next/head'
import Image from 'next/image'
import Container from '../components/layout';
import HeaderTitle from '../components/header_title';

export default function Home() {
  return (
    <Container>
      <HeaderTitle title="Home Pycheche" />
      <div className='texto row'>
        <img className='col-12' src="/images/paraguay.jpg" alt="imagen" />
        <div className='col-md-6 col-sm-12'>
          <h1>¿Que es Pycheche?</h1>
          <p>
            En simples palabras Pycheche es una App que tiene como finalidad ayudar al aprendizaje de la Danza Paraguaya
          </p>
        </div>
          <div className='col-md-6 col-sm-12'>
            <h1>¿Como nace Pycheche?</h1>
            <h5>Descripcion del problema inicial</h5>
            <p>
              Acceder a los principios sobre la danza paraguaya hoy en día es poco accesible por la falta de información ya que quedan pocos profesionales que conocen bien el tema, no hay mucha literatura, no hay mucha información en internet y acceder a una academia que puede facilitar la información resulta costoso.
            </p>
          </div>
      </div>

    </Container>

  )
}
