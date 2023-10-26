import { Link } from 'react-router-dom';
function Card({ countryId, countryName, iso3, imageUrl, cityCount, emissionDataYearStart, emissionDataYearEnd, temperatureDataYearStart, temperatureDataYearEnd }) {
    return (
        <div className="card col-4 mb-2" style={{ width: 18 + 'rem' }} >
            <img className="card-img-top" src={imageUrl} alt={"Image of " + countryName} />
            <div className="card-body">
                <h5 className="card-title">{ iso3 + ":" + countryName}</h5>
                <p className="card-text">Total cities: {cityCount}</p>

                {
                    // emissions and temp links
                    
                //<p className="card-text">{"View Emissions Year Range: " + emissionDataYearStart + "-" + emissionDataYearEnd} </p>
                //<p className="card-text">{"View Temperature Year Range: " + temperatureDataYearStart + "-" + temperatureDataYearEnd} </p>

                }


                <Link to={"/City/" + countryId} className="btn btn-outline-primary">View Cities</Link>
            </div>

        </div>

    )

}
export default Card
