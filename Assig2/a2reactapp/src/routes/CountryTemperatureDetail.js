import CountryTemperatureTable from '../components/CountryTemperatureTable'
import {useLocation } from 'react-router-dom';
const CountryTemperatureDetail = () => {
    let { state } = useLocation();
    return (
        <CountryTemperatureTable regionObj={state.regionData} countryObj={ state.countryData} />
    )
}


export default CountryTemperatureDetail