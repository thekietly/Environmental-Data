import { Link, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import CountryEmissionTable from '../components/CountryEmissionTable';
function CountryEmissionDetail({ regionObj, countryObj }) {
    const { countryId } = useParams();
    const [emissionData, setEmissionData] = useState({
        
    });
    const [elementData, setElementData] = useState({

    });
    console.log("hello");
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
                    <Link to={"/Country/" + regionObj.regionId} className="btn btn-outline-primary">Back to country List</Link>
                </div>
            </div>

            {
                /*
                */
            }


        </div>
    )

}
export default CountryEmissionDetail
