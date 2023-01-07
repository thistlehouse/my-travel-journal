import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

function Card(props) {
    return (
        <div className="card">
            <div className="card--row">
                <div className="card--photo_box">
                    <img src={props.imageUrl} className="card--photo"/> 
                </div>
                <div className="card--info">
                    <span className="card--inliner">
                        <FontAwesomeIcon icon={faLocationDot} className="card--pin" />         
                        <p className="card--location">{props.location}</p>
                        <a href={props.googleMapsUrl} src="" className="card--google_maps_link">View on Google Maps</a>
                    </span>
                    <h1 className="card--title">{props.title}</h1>  
                    <span className="card--inliner">
                        <p className="card--date start-date">{props.startDate} -</p>
                        <p className="card--date">{props.endDate}</p>
                    </span>            
                    <p className="card--text">{props.description}</p>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Card