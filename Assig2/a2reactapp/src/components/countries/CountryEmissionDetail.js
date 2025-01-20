import { Link, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import CountryEmissionTable from '../countries/CountryEmissionTable';
import CountrySummaryEmissionTable from '../countries/CountrySummaryEmissionTable';
function CountryEmissionDetail({ regionObj, countryObj }) {
    const { countryId } = useParams();
    const [emissionData, setEmissionData] = useState([] 
    );
    const [summaryEmissionData, setSummaryEmissionData] = useState([]
    );
    const [elementData, setElementData] = useState([]);
    const [elementId, setSelectedElementId] = useState('');

    useEffect(() => {
        fetch('http://localhost:5256/api/B_Countries/GetElementList')
            .then(response => response.json())
            .then(data => {
                setElementData(data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    useEffect(() => {
        fetch(`http://localhost:5256/api/B_Countries/SummaryCountryEmissionData/${countryId}`)
            .then(response => response.json())
            .then(data => {
                setSummaryEmissionData(data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [countryId]);
    
    const emissionDataAPICall = () => {
        fetch(`http://localhost:5256/api/B_Countries/CountryEmissionData/${countryId}?elementId=${elementId}`)
            .then(response => response.json())
            .then(data => {
                setEmissionData(data);
            })
            .catch(error => {
                console.log(error);
            });

    };
    console.log(emissionData);
    //console.log(countryObj);
    return (

        <div className="">
            { /*
                
            */
            }
            <div className="card col-4 mb-2 mx-auto">
                <img src={countryObj.imageUrl} className="card-img-top mt-2" alt="country image" />
                <div className="card-body">
                    <p className="card-text">{countryObj.iso3 === "" ? "" : countryObj.iso3 + ' - '} {countryObj.countryName} {regionObj.regionName === "" ? "" : " from " + regionObj.regionName}</p>
                    <Link to={"/Country/" + regionObj.regionId} className="btn btn-outline-primary">Back to country List</Link>
                </div>
            </div>
            <div className="text-left input-group">
                <select onChange={(e) => setSelectedElementId(e.target.value)} className="form-control col-4">
                    <option selected hidden>Select an element..</option>
                    {elementData.map(element => (
                        <option key={element.elementId} value={element.elementId}>
                            {element.elementName}
                        </option>
                    ))}
                </select>
                <button onClick={emissionDataAPICall} className="btn btn-outline-primary">Submit</button>
            </div>
            
            {
                /*
                Table

                Summary Table
                */
            }
            {
                emissionData.length > 0 && (
                    <CountryEmissionTable emissionData={ emissionData} />
                )
            }

            {
                summaryEmissionData.length > 0 && (
                    
                    <CountrySummaryEmissionTable summaryEmissionData={summaryEmissionData} />
                )
            }
        </div>
    )

}
export default CountryEmissionDetail
