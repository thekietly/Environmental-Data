import { Link, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CountryCard from "./CountryCard";
import RegionCard from "./RegionCard";
import Region from '../routes/Region';
function CountryTemperatureTable({ regionObj, countryObj }) {
    const { countryId } = useParams();
    const [temperatureData, setTemperatureData] = useState({
        minYear: '',
        maxYear: '',
        rawTemperatureData: [],
    });
    useEffect(() => {
        fetch(`http://localhost:5256/api/B_Countries/CountryTemperatureDetail/${countryId}`)
            .then(response => response.json())
            .then(data => {
                setTemperatureData(data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [countryId]);
    console.log(temperatureData);
    //console.log(countryObj);
    return (
        
        <div>
            { /*
                
            */
            }
            <div className="card col-4 mb-2">
                <img src={countryObj.imageUrl} className="card-img-top" alt="country image" />
                <div className="card-body">
                    <p className="card-text">{countryObj.iso3 === "" ? "" : countryObj.iso3 + ' - '} {countryObj.countryName} {regionObj.regionName === "" ? "" : " from " + regionObj.regionName}</p>
                    <Link to = { "/Country/" + regionObj.regionId } className="btn btn-outline-primary">Back to country List</Link>
                </div>
            </div>

            {
                /*
                temperature table

                temperature graph
                */

    
            }

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


        </div>
        )

}
export default CountryTemperatureTable
