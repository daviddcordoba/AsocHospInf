import './FooterStyles.scss'

export default function Footer(){
    return(
        <div className='footer'>
            <div className='row-top'>
                <div>
                    <h1>Asociacion Hospital Infantil</h1>
                    <p>Aguanten los pendejos</p>
                </div>
                <a href='/'>
                    <i className='fa-brands fa-facebook-square'></i>
                </a>
                <a href='/'>
                    <i className='fa-brands fa-instagram-square'></i>
                </a>
                <a href='/'>
                    <i className='fa-brands fa-whatsapp-square'></i>
                </a>
            </div>
            <div className='row-bottom'>
                <div>
                    <h4>Proyectos</h4>
                    <a href='/'>Changelog</a>
                    <a href='/'>Status</a>
                    <a href='/'>License</a>
                    <a href='/'>All versions</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href='/'>Github</a>
                    <a href='/'>Issues</a>
                    <a href='/'>Proyects</a>
                    <a href='/'>Twitter</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href='/'>Support</a>
                    <a href='/'>Troubleshooting</a>
                    <a href='/'>Contact Us</a>
                </div>
                <div>
                    <h4>Otros</h4>
                    <a href='/'>Term of services</a>
                    <a href='/'>Privacy Policy</a>
                    <a href='/'>License</a>                    
                </div>
            </div>
        </div>
    )
}