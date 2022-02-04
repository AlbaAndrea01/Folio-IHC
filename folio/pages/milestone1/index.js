import Head from 'next/head';
import Image from 'next/image'
import Container from '../../components/layout';
import HeaderTitle from '../../components/header_title';

const Milestone1 = () => {
  return (
    <Container>
      <HeaderTitle title="Home Pycheche" />
      <div height= "auto" >
        <h1>Milestone1</h1>
        <div >
            <h5>Revisión de la literatura </h5>
              <p>
                Actualmente no existe una plataforma en la que podamos encontrar la solución a los problemas planteados,
                existen algunas plataformas que intentan ayudar con el problema pero en otras áreas de danza (por ejemplo de danza clásica)
                de igual forma no son muy usables que digamos ya que la mayoría deja bastante que desear con respecto a interfaz gráfica e
                inclusividad. Específicamente en el área de danza paraguaya no existe una plataforma confiable, a
                lo sumo existen páginas web pero con MUY poca información no confirmada
              </p>
              <Image src="/images/map-empatia.png" alt="mapa-empatia" width={600} height={350} />
              </div>
              <div >
            <h5>Resumen del problema</h5>
              <p>
                Queremos ayudar a profesores, alumnos y aficionados de la danza a acercarse a la información sobre la danza paraguaya en
                un solo lugar, fácil y accesible, cuando se encuentren en la clase de danza junto a sus compañeros o preparando o armando
                una coreografía.
                Para lograr el objetivo principal de tener acceso a la información fácil y cómoda haciendo uso de un
                dispositivo móvil que sirva de apoyo a la hora de estudiar, aprender y enseñar la danza paraguaya.
              </p>
              <h5>Conceptualizacion</h5>
              <Image src="/images/conceptualizacion.png" alt="conceptualizacion" width={600} height={350} />
              </div>
              <div >
            <h5>Diseño de la solución </h5>
              <li>Stakeholders:
                <p>Bailarines, profesores y aficionados a la danza paraguaya</p>
              </li>
              <li>Descripción
                <p>Una plataforma que brinde la oportunidad de acceder a toda la información certera y completa sobre TODOS los principios de
                  la danza paraguaya en un solo lugar y al alcance de tus manos</p>
              </li>
              </div>
              <div>
          <h5>Requisitos funcionales iniciales: </h5>
              <li>El sistema debe permitir al usuario ver todas las danzas tradicionales con sus características 
                principales (línea musical, historia, vestuario )</li>
              <li>El sistema debe permitir al usuario acceder todos los pasos de la danza paraguaya con indicaciones de los mismos</li>
              <li>El sistema debe permitir al usuario ver las características de cada proyección  (línea musical, historia, vestuario )</li>
          <h5>Requisitos no funcionales iniciales:</h5>
              <li>El sistema debe permitir al usuario marcar como sus favoritos cualquier danza tradicional </li>
              <li>El sistema debe permitir al usuario guardar cualquier danza o característica de cualquier proyección.</li>
              <li>El sistema debe filtrar la información con respecto a lo que el usuario selecciona</li>
              <Image src="/images/persona.png" alt="persona" width={600} height={350} />
          </div>
      </div>
    </Container>
  )
}

export default Milestone1;