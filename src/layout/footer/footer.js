import './footer.scss'

export default function Footer(){
    return (
        <footer>
            <div className='top'>
                <div>
                    <h1>Logo</h1>
                    <p>Hace tu donacion aqui</p>
                </div>
                <div>
                    <a href='/'>
                        <i>face</i> 
                    </a>
                    <a href='/'>
                        <i>insta</i> 
                    </a>
                    <a href='/'>
                        <i>wapp</i> 
                    </a>
                </div>
            </div>

            <div className='bottom'>
                <div>
                    <h4>Sobre nosotros</h4>
                    <a href='/'>a </a>
                    <a href='/'>a </a>
                    <a href='/'>a </a>
                </div>
                <div>
                    <h4>Hace tu donacion</h4>
                    <a href='/'>a </a>
                    <a href='/'>a </a>
                    <a href='/'>a </a>
                </div>
                <div>
                    <h4>Campanias</h4>
                    <a href='/'>a </a>
                    <a href='/'>a </a>
                    <a href='/'>a </a>
                </div>
                <div>
                    <h4>Contactanos</h4>
                    <a href='/'>a </a>
                    <a href='/'>a </a>
                    <a href='/'>a </a>
                </div>
            </div>
        </footer>
    )
}