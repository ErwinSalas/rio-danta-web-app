
import Card from './Card.js'

const TourItem=(props)=>(
    <div className="u3 u12-mobile">
        <div className="video-responsive  ">
            <Card item={props.tour}/>
        </div>
    </div>

)
export default TourItem