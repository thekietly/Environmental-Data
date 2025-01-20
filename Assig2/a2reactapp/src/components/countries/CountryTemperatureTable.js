const CountryTemperatureTable = ({ temperatureData}) => {

    return (
        <table className="table table-striped table-bordered table-hover table-dark align-middle">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Temperature Change</th>
                    <th>Value</th>
                    <th>Unit</th>
                    <th>Regional Average</th>
                    <th>Regional Min</th>
                    <th>Regional Max</th>
                </tr>
            </thead>
            <tbody>
                {temperatureData.rawTemperatureData.map((data, index) => (
                    <tr key={index}>
                        <td>{data.theCountryTempData.year}</td>
                        <td>{data.theCountryTempData.change}</td>
                        <td>{data.theCountryTempData.value}</td>
                        <td>{data.theCountryTempData.unit}</td>
                        <td>{data.regionalAvg}</td>
                        <td>{data.regionalMin}</td>
                        <td>{data.regionalMax}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default CountryTemperatureTable