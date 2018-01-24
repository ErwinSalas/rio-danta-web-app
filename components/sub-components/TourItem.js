
import Card from './Card.js'

const TourItem=(props)=>(
    <div className="u4">
        <div className="video-responsive  ">
            <Card item={props.tour}/>
        </div>
    </div>

)
export default TourItem