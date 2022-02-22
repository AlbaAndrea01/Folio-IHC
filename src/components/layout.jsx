import Head from "next/head";
import Aside_izq from './aside_izq'
import Footer from "./Footer";
import Navigation from "./navBar";


const Container = (props) => {
    return (
        <div className="container-fluid">
             <Head>
            </Head>
            <Navigation className="nav"/>
            <div className="row content">
                <Aside_izq></Aside_izq>
                <div className="contenido offset-2 h-100"   >
                    {props.children}
                </div>
            </div>
            <Footer/>
        <style jsx>{`
            .contenido {
                padding: 10x 390px 20px 120px;
                margin-right: 100px;
                overflow-y= "scroll";
            }
        `}</style>
        </div>

    )
}
export default Container;