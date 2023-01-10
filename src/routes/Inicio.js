import NavBar from "../components/navbar/navbar";
import Hero from "../components/hero/Hero";
import Campaigns from "../components/campaign/Campaign";
import Recent from "../components/recent/Recent";
import Footer from "../components/footer/Footer";

export default function Inicio(){
    return(
        <>
            <NavBar/>
            <Hero 
                cName ='hero'
                heroImg='https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                title='No se que poner'
                text='Velando por la salud de ninos'
                buttonText='Hace tu donacion'
                url='/'
                btnClass='show'
            />
            {/*  Campanas destacadas */}
            <Campaigns/>
            
            {/* Campanas recientes */}
            <Recent/>
            <Footer/>
        </>
    )
}