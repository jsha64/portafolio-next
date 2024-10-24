import Link from 'next/link';
import { Navbar } from '../../components/Navbar/navbar'

export const Home = () => {
  return (
    <Navbar>
    <div className='flex flex-row'>
      <div className='mr-36'>
        <h1>Jorge Meriño - Desarrollador Fullstack</h1>
        <p>Bienvenido a mi portafolio.</p>
        <p>Explora mis servicios y proyectos.</p>
      </div>
      <ul className='flex flex-row justify-center items-center space-x-36'>
        <li>
          <Link href="/services">
            Servicios
          </Link>
        </li>
        <li>
          <Link href="/portfolio">
            Portafolio
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contacto
          </Link>
        </li>
      </ul>
    </div>
    </Navbar>
  );
};


