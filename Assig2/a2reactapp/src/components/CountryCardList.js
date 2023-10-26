import { useState, useEffect } from 'react';
import CountryCard from "./CountryCard";
import RegionCard from "./RegionCard";
import { Link, useParams } from 'react-router-dom';

function CountryCardList() {
    const { regionId } = useParams();
    const [countryData, setCountryData] = useState({
        theRegion: {},
        countryList: [],
    });
    // fix no regionId being passed over
    useEffect(() => {
        fetch(`http://localhost:5256/api/B_Countries/CountryList/${regionId}`)
            .then(response => response.json())
            .then(data => {
                setCountryData(data);

            })
            .catch(error => {

            });
    }, [regionId]);


    return (
        <div className="row">
            <div className="card col-4 mb-2" style={{ width: 18 + 'rem' }}>
                <img className="card-img-top" src={countryData.theRegion.imageUrl} alt={"Image of " + countryData.theRegion.regionName} />
                <div className="card-body">
                    <h5 className="card-title">{countryData.theRegion.regionName}</h5>
                    <p className="card-text">Total countries: {countryData.theRegion.countryCount}</p>
                    <Link to="/Region" className="btn btn-outline-primary">Back To Regions</Link>
                </div>
            </div>
            {countryData.countryList.map((obj) => (
                <CountryCard
                //countryId, countryName, iso3, imageUrl, cityCount, emissionDataYear,  temperatureDataYear
                    key={obj.countryId}
                    countryId={obj.countryId}
                    countryName={obj.countryName}
                    iso3={obj.iso3}
                    imageUrl={obj.imageUrl}
                    cityCount={obj.cityCount}
                    emissionDataYear={obj.emissionDataYearRange}
                    temperatureDataYear={obj.temperatureDataYearRange}
                    
                />
            ))}
        </div>
    );
}

export default CountryCardList;
