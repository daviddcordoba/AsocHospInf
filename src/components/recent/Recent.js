import RecentData from "./RecentData";

export default function Recent(){
    return(
        <div className='recent'>
            <h1> CAMPAÑAS RECIENTES</h1>
            {/* Podria poner un h2, algo como una mini descripcion */}
            <div className="recent-card">  {/* La idea es que haya 3 cartas, si no, usaria un map */}
                <RecentData
                title='Proyecto de Asistencia'
                img='https://scontent.frsa3-1.fna.fbcdn.net/v/t39.30808-6/315107624_8338880359517443_6952638708282002059_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGn2lLGn_wSjxfo9GSG5OuacodjhI3hRj9yh2OEjeFGPwugY6OS79fXwPyYRMJ9ZReN0CI-foYznGIBwjvYnG0U&_nc_ohc=zIj5EEe3VfgAX8n-U7x&_nc_ht=scontent.frsa3-1.fna&oh=00_AfADvdrc9CozNnCFMxey3iW05mg-Qtfup0nKSNc8xYDHPw&oe=63BF0694'
                text='El objetivo de esta acción hermosa y divertida, es conmemorar el Día de los Derechos de las niñas, niños y adolescentes" que celebramos cada 20 de noviembre y Desde 1989 por la Declaración de la Convención de los derechos del niño.'
                />
                <RecentData
                title='Proyecto de Asistencia'
                img='https://scontent.frsa3-1.fna.fbcdn.net/v/t39.30808-6/315107624_8338880359517443_6952638708282002059_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGn2lLGn_wSjxfo9GSG5OuacodjhI3hRj9yh2OEjeFGPwugY6OS79fXwPyYRMJ9ZReN0CI-foYznGIBwjvYnG0U&_nc_ohc=zIj5EEe3VfgAX8n-U7x&_nc_ht=scontent.frsa3-1.fna&oh=00_AfADvdrc9CozNnCFMxey3iW05mg-Qtfup0nKSNc8xYDHPw&oe=63BF0694'
                text='El objetivo de esta acción hermosa y divertida, es conmemorar el Día de los Derechos de las niñas, niños y adolescentes" que celebramos cada 20 de noviembre y Desde 1989 por la Declaración de la Convención de los derechos del niño.'
                />
                <RecentData
                title='Proyecto de Asistencia'
                img='https://scontent.frsa3-1.fna.fbcdn.net/v/t39.30808-6/315107624_8338880359517443_6952638708282002059_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGn2lLGn_wSjxfo9GSG5OuacodjhI3hRj9yh2OEjeFGPwugY6OS79fXwPyYRMJ9ZReN0CI-foYznGIBwjvYnG0U&_nc_ohc=zIj5EEe3VfgAX8n-U7x&_nc_ht=scontent.frsa3-1.fna&oh=00_AfADvdrc9CozNnCFMxey3iW05mg-Qtfup0nKSNc8xYDHPw&oe=63BF0694'
                text='El objetivo de esta acción hermosa y divertida, es conmemorar el Día de los Derechos de las niñas, niños y adolescentes" que celebramos cada 20 de noviembre y Desde 1989 por la Declaración de la Convención de los derechos del niño.'
                />
            </div>

        </div>
    )
}