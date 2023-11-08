import { Link } from 'react-router-dom';
function CountryTemperatureData({ countryId, countryName, iso3, imageUrl, cityCount, emissionDataYear, temperatureDataYear }) {
    return (
        <div className="card col-4 mb-2" style={{ width: 18 + 'rem' }} >
            <img className="card-img-top" src={imageUrl} alt={"Image of " + countryName} />
            <div className="card-body">
                <h5 className="card-title">{iso3 === "" ? "" : iso3 + " : "} {countryName}</h5>
                <p className="card-text">Total cities: {cityCount === 0 ? "No city records" : cityCount}</p>

                <p className="card-text">{"Emissions Year Range: " + emissionDataYear[0] + "-" + emissionDataYear[1]} </p>

                <p className="card-text">{"Temperature Year Range: " + temperatureDataYear[0] + "-" + temperatureDataYear[1]} </p>

                {
                    emissionDataYear[0] === 0 ? "" : <Link to={"/Country/SummaryCountryEmissionsData/" + countryId} className="btn btn-outline-primary">View Emissions</Link>
                }
                {
                    temperatureDataYear[0] === 0 ? "" : <Link to={"/Country/CountryTemperatureDetail/" + countryId} className="btn btn-outline-primary">View Temperature</Link>
                }

                <Link to={"/City/" + countryId} className="btn btn-outline-primary">View Cities</Link>
            </div>

        </div>

    )

}
export default CountryTemperatureData
