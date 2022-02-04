import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link';
import Container from '../../components/layout';
import HeaderTitle from '../../components/header_title';

const Milestone3 = () => {
  return (
    <Container>
      <HeaderTitle title="Home Pycheche" />
      <div>
        <h1>Milestone3</h1>
        <div>
          <h5>Tareas que va permitir realizar la aplicación </h5>
          <li>Tarea 1: crear una clase nueva , guardar la case </li>
          <li>Tarea 2: Crear una coreografía nueva, agregar un paso o varios, guardar los pasos y guardar la coreografía</li>
          <li>Tarea 3: explorar la sección de Pycheche y marcar una clase en particular como favorita.</li>
        </div>
        <div>
          <h5>Wireframes digitales en escala de grises:  </h5>
          <Image src="/images/gama-gris.png" alt="gama-gris" width={871} height={758} />
        </div>
        <div>
          <h5>Esquema de colores: </h5>
          <p>Se decidió utilizar una gama de colores cálidos en tosnalidades pastel, para evocar la calidez y dulzura que transmite
            la danza paraguaya, el color durazno es el color principal ya que presenta buen contraste con el fondo pero no es invasivo. </p>
          <Image src="/images/colores.png" alt="colores" width={322} height={357} />
        </div>
        <di>
          <h5>Esquema de colores: </h5>
          <li>Se incorporó el botón de atrás en algunas pantallas para retroceder un paso.</li>
          <li>Se creó el editor de pasos, para que agregar un paso sea más parecido al método real que se utiliza, y por lo tanto más intuitivo. </li>
          <li>Se mejoró la redacción.</li>
          <p>
            Definitivamente, el prototipo de alta fidelidad es bastante mejor que el prototipo en escala de grises, gracias a los
            sutiles cambios que fueron incorporados.
            Este prototipo es único porque no existe en el mercado algo similar, si bien tiene algunos elementos que fueron tomados de otras
            aplicaciones, como la barra de búsqueda y la sección de explorar, también incorpora elementos que son innovadores, como el editor
            de pasos y las secciones de creación de clases y coreografías.
          </p>
          <h6>Los flujos importantes de la aplicación son:</h6>
          <li> Explorar clases y coreografías. </li>
          <li> Crear clases </li>
          <li> Crear coreografías </li>
          <li> Buscar,ademas hay otras tareas menores, como la edición del perfil y la sección de mis clases,
            mis coros y mis favoritos</li>
        </di>
        <div>
          <h5>Prototipos de alta fidelidad: </h5>
          <Image src="/images/gama-color.png" alt="gama-color" width={986} height={737} />
        </div>
        <div>
          <Link href="https://t.maze.co/65461365">
            <a>Link para los tests de usabilidad: </a>
          </Link>
          <h5>Planificacion para el testeo:  </h5>
          <p>Se creó una prueba para testear la usabilidad del prototipo en maze que sera enviada a estudiantes y profesores de danza paraguaya.
            Estos serán reclutados a través de mensajes de texto.</p>
          <h6>Puntos interesantes que resaltar del testeo. </h6>
          <li>La pantalla de explorar no es muy intuitiva, y tiene un gran número de mal clickeos, esta pantalla debe ser mejorada. Sin embargo,
            es una funcionalidad que a los usuarios les gusto mucho. </li>
          <li>Las pantallas de inicio, home y la de clases/coreografías/favoritos tuvieron la respuesta esperada de los usuarios.</li>
          <li>El editor de pasos tuvo muy buena recepción. </li>
          <li>El flujo de creación de coreografías fue entendido por todos los testers. </li>
          <h6>Lista de posibles cambios a mejorar luego de las pruebas realizadas </h6>
          <li>Hacer que la pantalla de explorar tenga menos botones para que sea menos confuso.</li>
          <li>En la pantalla de editar paso, agregar un texto flotante o etiqueta sobre los elementos (por ej. el triángulo, que diga caballero)
            asi el usuario podrá realizar la acción sin confusiones. </li>
          <li>Debemos agregar una funcionalidad donde se pueda eliminar el paso agregado. </li>
          <li>Falta en la pantalla crear coreo que se visualicen los pasos cargados. </li>
        </div>

      </div>

    </Container>
  )
}

export default Milestone3;