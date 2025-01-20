import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../src/App.css'; 
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Region from './routes/Region';
import Country from './routes/Country';
import City from './routes/City';
import Home from './routes/Home';
import CountryEmissions from './routes/CountryEmissions';
import CountryTemperature from './routes/CountryTemperature';
import AirQualityData from './routes/AirQualityData';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/" element={<Region />} />
                    <Route path="/Home" element={<Region />} />

                    <Route path="/Region" element={<Region />} />
                    
                    <Route path="/Country" element={<Country />} />
                    <Route path="/Country/:regionId" element={<Country />} />
                    <Route path="/Country/CountryTemperatureDetail/:countryId" element={<CountryTemperature />} />
                    {/*<Route path="/Country/SummaryCountryEmissionsData/:countryId" element={<SummaryCountryEmissionsData />} />*/}

                    <Route path="/Country/CountryEmissionsDetail/:countryId" element={<CountryEmissions />} />
                    <Route path="/City/:countryId" element={<City />} />

                    <Route path="/City/AirQualityData/:cityId" element={<AirQualityData />} />



                    <Route path="*" element={<Home />} />
                </Route>

            </Routes>
        </BrowserRouter>
        
  </React.StrictMode>
);