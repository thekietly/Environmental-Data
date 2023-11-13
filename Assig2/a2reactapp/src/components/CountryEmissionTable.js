const CountryEmissionTable = ({ emissionData }) => {

    return (
        <div>
            <h2>Raw Emission Data</h2>
            <table className="table table-striped table-bordered table-hover table-dark align-middle">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Element Name</th>
                        <th>Value</th>

                    </tr>
                </thead>
                <tbody>
                    {emissionData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.year}</td>
                            <td>{data.itemName}</td>
                            <td>{data.value}</td>


                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
    )
}
export default CountryEmissionTable