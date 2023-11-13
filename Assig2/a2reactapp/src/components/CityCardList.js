import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import CityCard from "../components/CityCard";

function CityCardList() {
    const [query, setQuery] = useState('');
    const { countryId } = useParams();
    const [cityData, setCityData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5256/api/C_Cities/${countryId}?searchText=${query}`)
            .then(response => response.json())
            .then(data => {
                setCityData(data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [countryId, query]);
    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        setQuery(formJson.searchTextOnSubmit);
    }
    return (

        <div>
            <form method="post" onSubmit={handleSubmit}>
                <div className="row justify-content-start mb-3">
                    <div className="col-3">
                        <input type="text" name="searchTextOnSubmit" className="form-control" placeholder="Type a city... " />
                    </div>
                    {
                        /*Auto complete city */
                    }
                    <div className="col text-left">
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </div>
                </div>
            </form>

            {
                cityData.length > 0 && (
                    <CityCard cityData={ cityData} />
                )

            }


        </div>
    );
}

export default CityCardList;
