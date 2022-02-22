import Link from 'next/link';
import Image from 'next/Image';

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg contenedor nav"> 
            <Link href="/">
                   <img src="/images/pycheche.png" alt="Pycheche" />
            </Link>
            <div className="text-right" id="navbarNav">
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
                    background: #FFB287;
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