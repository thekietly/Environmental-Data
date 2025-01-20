import CountryEmissionDetail from '../components/countries/CountryEmissionDetail';

import { useLocation } from 'react-router-dom';
const CountryEmissions = () => {
    let { state } = useLocation();
    return (
        <CountryEmissionDetail regionObj={state.regionData} countryObj={state.countryData} />
    )

}

export default CountryEmissions