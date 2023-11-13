import CountryTemperatureTable from '../components/CountryTemperatureDetail'
import {useLocation } from 'react-router-dom';
const CountryTemperature = () => {
    let { state } = useLocation();
    return (
        <CountryTemperatureTable regionObj={state.regionData} countryObj={ state.countryData} />
    )
}


export default CountryTemperature