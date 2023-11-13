const CountrySummaryEmissionTable = ({ summaryEmissionData }) => {

    return (
        <div>
            <h2>Summary Emission Table</h2>
            <table className="table table-striped table-bordered table-hover table-dark align-middle">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Element Name</th>
                        <th>Total Value</th>

                    </tr>
                </thead>
                <tbody>
                    {summaryEmissionData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.year}</td>
                            <td>{data.element}</td>
                            <td>{data.totalValue}</td>


                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
    )
}
export default CountrySummaryEmissionTable