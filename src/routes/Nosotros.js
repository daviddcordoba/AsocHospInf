import About from "../components/about/About";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import NavBar from "../components/navbar/navbar";

export default function Nosotros(){
    return(
        <>
            <NavBar/>
            <Hero 
                cName ='hero-mid'
                heroImg='https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
                title='Nosotros'
                btnClass='hide'
            />
            <About/>
            <Footer/>
        </>
    )
}