import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import NavBar from "../components/navbar/navbar";
import Recent from "../components/recent/Recent";

export default function Proyectos(){
    return(
        <>
            <NavBar/>
            <Hero 
                cName ='hero-mid'
                heroImg='https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                title='Proyectos'
                btnClass='hide'
            />
            <Recent/>
            <Footer/>
        </>
    )
}