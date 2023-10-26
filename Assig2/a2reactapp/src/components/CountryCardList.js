import { useState, useEffect } from 'react'
import CountryCard from "./CountryCard"
import RegionCard from "./RegionCard"

import { Link, useParams } from 'react-router-dom';

function CountryCardList () {
    let params = useParams();
    const [countryData, setState] = useState({});
    const [regionId, setItemId] = useState(params.regionId);
    useEffect(() => {
        fetch(`http://localhost:5256/api/B_Countries/CountryList/${regionId}`)
            .then(response => response.json())
            .then(data => setState(data))
            .catch(error => {
                console.log(error);
            });
    }, [regionId]);
    console.log(countryData.theRegion);
    return (
        <div className="row">
            <div className="card col-4 mb-2" style={{ width: 18 + 'rem' }} >
                <img className="card-img-top" src={countryData.theRegion.imageUrl} alt={"Image of " + countryData.theRegion.regionName} />
                <div className="card-body">
                    <h5 className="card-title">{countryData.theRegion.regionName}</h5>
                    <p className="card-text">Total countries: {countryData.theRegion.countryCount}</p>
                </div>

            </div>
            {countryData.countryList.map((obj) => (
                <RegionCard
                    key={obj.countryId}
                    countryId={obj.regionId}
                    countryName={obj.regionName}
                    iso3={obj.iso3}
                    imageUrl={obj.imageUrl}
                    cityCount={obj.cityCount}


                />))}
        </div>

            
       

    )

}

export default CountryCardList