import { useState, useEffect } from 'react';
import CountryCard from "./CountryCard";
import { Link, useParams } from 'react-router-dom';
import { fetchCountryListData } from '../../services/API';
import  CountryAutoCompleteSearch  from './CountryAutoCompleteSearch';
function CountryCardList() {
    const [query, setQuery] = useState('');
    const { regionId } = useParams();
    const urlRegionId = regionId || '0';
    const [countryData, setCountryData] = useState({
        theRegion: {},
        countryList: [],
    });
    const [countryAutoComnpleteData, setCountryAutoCompleteData] = useState({
        theRegion: {},
        countryList: [],
    });
    useEffect(() => {
        const getCountryListBySearchQuery = async () => {
            try {
                const data = await fetchCountryListData(urlRegionId, query);
                setCountryData(data);
            } catch (error) {
                console.log(error);
            }
        };

        getCountryListBySearchQuery();
    }, [urlRegionId, query]);

    useEffect(() => {
        const getCountryAutoCompleteData = async () => {
            try {
                const data = await fetchCountryListData(urlRegionId);
                setCountryAutoCompleteData(data);
            } catch (error) {
                console.log(error);
            }
        };

        getCountryAutoCompleteData();
    }, [urlRegionId]);
    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        setQuery(formJson.countrySearchText);
    }
    console.log(countryAutoComnpleteData.countryList);
    console.log(countryAutoComnpleteData.countryList.map(country => country.countryName));
    return (

        <div>
            <form method="post" onSubmit={handleSubmit}>
                <div className="row justify-content-start mb-3">
                    <div className="col-3">
                        <CountryAutoCompleteSearch countries={countryAutoComnpleteData.countryList} />

                    </div>
                    <div className="col-1">
                        <button className="btn btn-outline-info" type="submit">Search</button>
                    </div>
                    <div className="col text-left">
                        <Link to="/Region" className="btn btn-outline-primary">Back To Regions</Link>
                    </div>
                </div>
            </form>
            {
                countryData.theRegion.regionId === 0 ?
                    "" : <div className="card col-4 mb-2 mx-auto" style={{ width: 18 + 'rem' }}>
                        <img className="card-img-top mt-2" src={countryData.theRegion.imageUrl} alt={"Image of " + countryData.theRegion.regionName} />
                        <div className="card-body">
                            <h5 className="card-title">{countryData.theRegion.regionName}</h5>
                            <p className="card-text">Total countries: {countryData.theRegion.countryCount}</p>
                        </div>
                    </div>
            }

            <div className="row">
                {countryData.countryList.map((obj) => (
                    <CountryCard
                        //countryId, countryName, iso3, imageUrl, cityCount, emissionDataYear,  temperatureDataYear
                        key={obj.countryId}
                        countryObj={obj}
                        regionObj={countryData.theRegion}
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