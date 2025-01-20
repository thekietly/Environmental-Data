import CityAirQualityData from '../components/cities/CityAirQualityData'

import { useLocation } from 'react-router-dom';
const AirQualityData = ({ }) => {

    let { state } = useLocation();
    return (
        <CityAirQualityData countryId={ state.countryInfo} />


    )

}

export default AirQualityData