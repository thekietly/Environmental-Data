import { Link, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import TemperatureGraph from '../countries/TemperatureGraph';
import CountryTemperatureTable from '../countries/CountryTemperatureTable';
function CountryTemperatureDetail({ regionObj, countryObj }) {
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
                temperatureData.rawTemperatureData.length > 0 && (
                    <>
                        <TemperatureGraph temperatureData={temperatureData} />
                        <CountryTemperatureTable temperatureData={temperatureData} />
                    </>
                )

            }
        </div>
        )

}
export default CountryTemperatureDetail
