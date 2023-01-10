import './CampaignStyles.scss';

export default function DestinationData(props){
    return(
        <div className={props.cName}>
                <div className='desc-text'>
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                </div>

                <div className='images'>
                    <img alt='img' src={props.img1}></img>
                    <img alt='img' src={props.img2}></img>
                </div>

            </div>
    )
}