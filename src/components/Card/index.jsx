import './style.css';

export function Card(props) {
    return (
        <div className='c-card'>
            <strong className='c-card__nome'>{props.name}</strong>
            <small className='c-card__hora'>{props.time}</small>
        </div>
    )
}