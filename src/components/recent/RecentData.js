import './RecentStyles.scss'

export default function RecentData(props){
    return(
        <div className ='card'>
            <div className='image'>
                <img alt='card-img' src={props.img}/>
            </div>
            <h4>{props.title}</h4>
            <p>{props.text}</p>
        </div>
    )
}