const CityTable = ({ cityData }) => {
    
    return (

        <div>
            <h2>Cities List</h2>
            <table className="table table-striped table-bordered table-hover table-dark align-middle">
                <thead>
                    <tr>
                        <th>City Name</th>
                        <th>Air Quality Year Range</th>
                        <th>Air Quality Records Count</th>

                    </tr>
                </thead>
                <tbody>
                    {cityData.map((data, index) => (
                        <tr key={data.cityID}>
                            <td>{data.cityName}</td>
                            <td>{data.airQualityYearRange[0] + " - " + data.airQualityYearRange[1]  }</td>
                            <td>{data.recordCount}</td>


                        </tr>
                    ))}
                </tbody>
            </table>
        </div>


    )

}

export default CityTable