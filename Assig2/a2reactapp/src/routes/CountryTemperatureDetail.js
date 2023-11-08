import CountryTemperatureTable from '../components/CountryTemperatureTable'
import { Link, useLocation } from 'react-router-dom';
const CountryTemperatureDetail = () => {
    let { state } = useLocation();
    console.log(state.regionData);
    console.log(state.countryData);
    return (
        <CountryTemperatureTable />
    )
}


export default CountryTemperatureDetail