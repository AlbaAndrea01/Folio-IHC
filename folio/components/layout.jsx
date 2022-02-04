import Head from "next/head";
import Aside_izq from './aside_izq'


const Container = (props) => {
    return (
        <div className="container-fluid">
             <Head>
            </Head>
            <div className="row">
                <Aside_izq></Aside_izq>
                <div className="contenido offset-2 position-fixed h-100"   >
                    {props.children}
                </div>
            </div>
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