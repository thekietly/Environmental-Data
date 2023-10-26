import { Link } from 'react-router-dom';
function Card({ countryId, countryName, iso3, imageUrl, cityCount, emissionDataYear,  temperatureDataYear }) {
    return (
        <div className="card col-4 mb-2" style={{ width: 18 + 'rem' }} >
            <img className="card-img-top" src={imageUrl} alt={"Image of " + countryName} />
            <div className="card-body">
                <h5 className="card-title">{ iso3 + " : " + countryName}</h5>
                <p className="card-text">Total cities: {cityCount}</p>


                {
                    emissionDataYear[0] === 0 ?<p>empty</p> : <p>non-empty</p>
                }

                {
                    temperatureDataYear[0] === 0 ?<p>empty</p> : <p>non-empty</p>
                }
                <p className="card-text">{"View Emissions: " + emissionDataYear[0] + "-" + emissionDataYear[1]} </p>
                <p className="card-text">{"View Temperature: " + temperatureDataYear[0] + "-" + temperatureDataYear[1]} </p>

                


                <Link to={"/City/" + countryId} className="btn btn-outline-primary">View Cities</Link>
            </div>

        </div>

    )

}
export default Card
