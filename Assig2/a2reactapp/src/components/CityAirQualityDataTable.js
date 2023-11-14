const CityAirQualityDataTable = ({ airQualityData }) => {
    console.log(airQualityData);
    return (
        <div className="table-responsive">
            <table className="table table-striped table-bordered table-hover table-dark align-middle overflow-auto">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Country PM10 Avg</th>
                        <th>Country PM10 Min</th>
                        <th>Country PM10 Max</th>
                        <th>Country PM25 Avg</th>
                        <th>Country PM25 Min</th>
                        <th>Country PM25 Max</th>
                        <th>Annual Mean</th>
                        <th>Annual Mean PM10</th>
                        <th>Annual Mean Ugm3</th>
                        <th>Annual Mean PM25</th>
                        <th>Reference</th>
                        <th>DB Year</th>
                        <th>Status</th>
                        <th>Station Type</th>
                        <th>Station Number</th>
                    </tr>
                </thead>

                <tbody>

                    {airQualityData.theCityAirQualityData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.year}</td>
                            <td>{parseFloat(data.countryPM10Avg).toFixed(2)}</td>
                            <td>{parseFloat(data.countryPM10Min).toFixed(2)}</td>
                            <td>{parseFloat(data.countryPM10Max).toFixed(2)}</td>
                            <td>{parseFloat(data.countryPM25Avg).toFixed(2)}</td>
                            <td>{parseFloat(data.countryPM25Min).toFixed(2)}</td>
                            <td>{parseFloat(data.countryPM25Max).toFixed(2)}</td>
                            <td>{data.theAirQualityData.annualMean}</td>
                            <td>{data.theAirQualityData.annualMeanPm10}</td>
                            <td>{data.theAirQualityData.annualMeanUgm3}</td>
                            <td>{data.theAirQualityData.annualMeanPm25}</td>
                            <td>{data.theAirQualityData.reference}</td>
                            <td>{data.theAirQualityData.dbYear}</td>
                            <td>{data.theAirQualityData.status}</td>
                            <td>{data.dataStationDetail[0].stationType}</td>
                            <td>{data.dataStationDetail[0].stationNumber}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
        
    )
}
export default CityAirQualityDataTable