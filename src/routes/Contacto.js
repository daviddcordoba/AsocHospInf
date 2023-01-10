import Hero from "../components/hero/Hero";
import NavBar from "../components/navbar/navbar";

export default function Contacto(){
    return(
        <>
            <NavBar/>
            <Hero 
                cName ='hero-mid'
                heroImg='https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                title='Contacto'
                btnClass='hide'
            />
        </>
    )
}