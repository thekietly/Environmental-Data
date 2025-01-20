import CountryTemperatureDetail from '../components/countries/CountryTemperatureDetail'
import {useLocation } from 'react-router-dom';
const CountryTemperature = () => {
    let { state } = useLocation();
    return (
        <CountryTemperatureDetail regionObj={state.regionData} countryObj={ state.countryData} />
    )
}


export default CountryTemperature