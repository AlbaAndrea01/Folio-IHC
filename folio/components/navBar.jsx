import Link from 'next/link';
import Image from 'next/Image';

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg contenedor"> 
                   <Image src="/images/logo.png" alt="Logo de la Empresa" width={60} height={32} />
            <Link href="/">
                <a className="navbar-brand">PYCHECHE</a>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link href="/milestone1">
                            <a className="nav-link">Milestone1</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/milestone2">
                            <a className="nav-link">Milestone2</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/milestone3">
                            <a className="nav-link">Milestone3</a>
                        </Link>
                    </li>

                </ul>
            </div>
            <style jsx>{`
                nav {
                    background: black;
                    color: white;
                }
                a {
                    color: white;
                }
                a:focus {
                    font-weight: 500;
                    color: #FFB287 ;
                }
                a:hover {
                    font-weight: 600;
                    color: #FFB287 ;
                }
  
            `}</style>
        </nav>
    )
}

export default Navigation;