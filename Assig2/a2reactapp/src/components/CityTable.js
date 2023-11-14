import { Link } from 'react-router-dom';

const CityTable = ({ cityData, countryId }) => {
    console.log("countryId: " + countryId);
    return (

        <div>
            <h2>Cities List</h2>
            <table className="table table-striped table-bordered table-hover table-dark align-middle">
                <thead>
                    <tr>
                        <th>City Name</th>
                        <th>Air Quality Year Range</th>
                        <th>Air Quality Records Count</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cityData.map((data, index) => (
                        <tr key={data.cityID}>
                            <td>{data.cityName}</td>
                            <td>{data.airQualityYearRange[0] + " - " + data.airQualityYearRange[1]  }</td>
                            <td>{data.recordCount}</td>
                            <td>{data.recordCount > 0 && (
                                <Link to={'/City/AirQualityData/' + data.cityID} state={{countryInfo: countryId}} className="btn btn-outline-info">View Air Quality Data</Link>
                            )}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>


    )

}

export default CityTable