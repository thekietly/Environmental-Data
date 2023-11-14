import { Link, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CityAirQualityDataTable from './CityAirQualityDataTable';

function CityAirQualityData ({countryId }) {
    const { cityId } = useParams();

    const [airQualityData, setAirQualityData] = useState({
        theCityDetail: {},
        theCityAirQualityData: [],
});
    useEffect(() => {
        fetch(`http://localhost:5256/api/C_Cities/GetAirQualityData/${cityId}`)
            .then(response => response.json())
            .then(data => {
                setAirQualityData(data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [cityId]);
    console.log(airQualityData.theCityAirQualityData.length > 0);
    return (

        <div>
            {
                airQualityData.theCityDetail.cityId === 0 ?
                    <Link to="/Region" className="btn btn-outline-primary">Back To Regions</Link> : <div className="card col-4 mb-2 mx-auto" style={{ width: 18 + 'rem' }}>
                        <img className="card-img-top" src={airQualityData.theCityDetail.imageUrl} alt={"Image of " + airQualityData.theCityDetail.regionName} />
                        <div className="card-body">
                            <h5 className="card-title">{airQualityData.theCityDetail.cityName}</h5>
                            <p className="card-text">
                            {airQualityData.theCityDetail.iso3 === "" ? "" : airQualityData.theCityDetail.iso3 + " : "}
                                {airQualityData.theCityDetail.countryName}
                                {airQualityData.theCityDetail.regionName === "" ? "" : " from " + airQualityData.theCityDetail.regionName}</p>
                            <Link to={"/City/" + countryId} className="btn btn-outline-primary">Back to Cities</Link>
                        </div>
                    </div>
            }
            {
                airQualityData.theCityAirQualityData.length > 0 && (
                    <CityAirQualityDataTable airQualityData={airQualityData} />)
            }

                
        </div>


    )

}

export default CityAirQualityData