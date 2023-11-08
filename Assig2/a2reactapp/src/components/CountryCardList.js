import { useState, useEffect } from 'react';
import CountryCard from "./CountryCard";
import RegionCard from "./RegionCard";
import { Link, useParams } from 'react-router-dom';

function CountryCardList() {
    const [query, setQuery] = useState('');
    
    const { regionId } = useParams();
    const urlRegionId = regionId || '0';
    const [countryData, setCountryData] = useState({
        theRegion: {},
        countryList: [],
    });
    // fix no regionId being passed over
    useEffect(() => {
        fetch(`http://localhost:5256/api/B_Countries/CountryList/${urlRegionId}?searchText=${query}`)
            .then(response => response.json())
            .then(data => {
                setCountryData(data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [urlRegionId]);
    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        setQuery(formJson.searchTextOnSubmit);
    }
    return (

        <div>
            <form method="post" onSubmit={handleSubmit}>
                <div className="row justify-content-start mb-3">
                    <div className="col-3">
                        <input type="text" name="searchTextOnSubmit" className="form-control" placeholder="Handle submit ...Type your query.. " />

                    </div>


                    <div className="col text-left">
                        <button className="btn btn-primary" type="submit">Search</button>
                    </div>
                </div>

            </form>
            <div className="card col-4 mb-2" style={{ width: 18 + 'rem' }}>
                <img className="card-img-top" src={countryData.theRegion.imageUrl} alt={"Image of " + countryData.theRegion.regionName} />
                <div className="card-body">
                    <h5 className="card-title">{countryData.theRegion.regionName}</h5>
                    <p className="card-text">Total countries: {countryData.theRegion.countryCount}</p>
                    <Link to="/Region" className="btn btn-outline-primary">Back To Regions</Link>
                </div>
            </div>
            <div className="row">
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
            
        </div>
    );
}

export default CountryCardList;
