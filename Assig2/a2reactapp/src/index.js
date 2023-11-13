import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Region from './routes/Region';
import Privacy from './routes/Privacy';
import Country from './routes/Country';
import City from './routes/City';
import Home from './routes/Home';
import Elements from './routes/Elements';
import CountryEmissions from './routes/CountryEmissions';
import SummaryCountryEmissionsData from './routes/SummaryCountryEmissionsData';
import CountryTemperature from './routes/CountryTemperature';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/Privacy" element={<Privacy />} />
                    <Route path="/Region" element={<Region />} />
                    
                    <Route path="/Country" element={<Country />} />
                    <Route path="/Country/:regionId" element={<Country />} />
                    <Route path="/Country/CountryTemperatureDetail/:countryId" element={<CountryTemperature />} />
                    <Route path="/Country/SummaryCountryEmissionsData/:countryId" element={<SummaryCountryEmissionsData />} />

                    <Route path="/Country/CountryEmissionsDetail/:countryId" element={<CountryEmissions />} />
                    <Route path="/Country/Elements" element={<Elements />} />

                    <Route path="/City/:countryId" element={<City />} />

                    <Route path="/City/AirQualityData/:cityId" element={<Country />} />



                    <Route path="*" element={<Home />} />
                </Route>

            </Routes>
        </BrowserRouter>
        
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
