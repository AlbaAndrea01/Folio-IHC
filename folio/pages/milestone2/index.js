import Head from 'next/head';
import Image from 'next/image'
import Container from '../../components/layout';
import HeaderTitle from '../../components/header_title';

const Milestone2 = () => {
  return (
    <Container>
      <HeaderTitle title="Home Pycheche" />
      <div>
        <h1>Milestone2</h1>
        <div>
          <h5>Prototipos y Evaluación heurística </h5>
          <p>Considerando la poca existencia en el mercado de aplicaciones que buscan solucionar un problema similar al
            explorado en este proyecto, queda claro que el orden de los elementos en las aplicaciones, la cohesión de estos
            unos con otros y la confiabilidad de la información son muy importantes.
            Los storyboards son buenos porque ayudan a explorar el problema desde una perspectiva diferente.
            Con las propuestas, los objetivos se logran, sin embargo, las soluciones no son las más innovadoras y
            quizá no las más eficientes posibles.
            Los prototipos fueron realizados teniendo en cuenta los requisitos iniciales del sistema, las personas creadas, los
            escenarios y los storyboards.
            Estos prototipos son los que nuestras personas utilizan, hipotéticamente, en los storyboards creados.
          </p>
        </div>
        <div>
          <h5>Storyboards</h5>
          <Image src="/images/storyboards.png" alt="storyboards" width={1000} height={350} />
          <h5>Algunas Ideas de diseño generadas durante Crazy 8s</h5>
          <Image src="/images/crazy8.png" alt="Crazy8" width={1000} height={350} />
        </div>
      </div>
      <div>
        <h5>Evaluaciones-Heurísticas</h5>
        <p>
          Se realizó la evaluación heurística con grupos de compañeros a través de llamadas en meet.
          En momentos separados se realizaron reuniones de meet con los miembros del otro grupo para realizar la evaluación
          con demostraciones de los prototipos y realizando preguntas, una vez terminada la evaluación, cada uno relleno una
          planilla con sus comentarios.
        </p>
        <h6> Cambios que se deben realizar como resultado de la evaluación:</h6>
        <li>En los tres prototipos falta una manera de volver atrás en caso de ser necesario. </li>
        <li>Hay que mejorar el uso de iconos para que el usuario reconozca donde tiene que hacer click para cierta acción.</li>
        <li>Hay que conectar los prototipos y normalizar los elementos para que haya cohesión entre uno y otro.</li>
      </div>

    </Container>
  )
}

export default Milestone2;