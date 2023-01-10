import './ContactFormStyles.scss'

export default function ContactForm(){
    return(
        <div className='form-container'>
            <h1>Mandamos un mensaje</h1>
            <form>
                <input placeholder='Nombre'/>
                <input placeholder='Email'/>
                <input placeholder='Telefono'/>
                <textarea placeholder='Escribe tu mensaje aqui..' rows={4}/>
                <button>Enviar</button>
            </form>
        </div>
    )
}