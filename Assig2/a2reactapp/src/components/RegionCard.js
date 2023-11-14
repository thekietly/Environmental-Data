import { Link } from 'react-router-dom';
function Card({ regionId, regionName, imageUrl, countryCount }) {
    return (
        <div className="card col-4 mb-2" style={{ width: 18 + 'rem' }} >
            <img className="card-img-top" src={imageUrl} alt={"Image of " + regionName} />
            <div className="card-body">
                <h5 className="card-title">{regionName}</h5>
                <p className="card-text">Total countries: {countryCount}</p>

                <Link to={"/Country/" + regionId} className="btn btn-outline-primary">View Countries</Link>
            </div>
        </div>
            
            )
    
}
export default Card

