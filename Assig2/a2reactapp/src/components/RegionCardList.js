import { useState, useEffect } from 'react'
import RegionCard from "./RegionCard"
const RegionCardList = ({ }) => {
    const [regionData, setState] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5256/api/A_Regions")
            .then(response => response.json())
            .then(data => setState(data))
            .catch(error => {
                console.log(error);
            });
    }, [])

    return (
        <div className="row">

            {regionData.filter(obj => obj.regionId > 0).map((obj) => (
                <RegionCard
                    key={obj.regionId}
                    regionId={obj.regionId}
                    regionName={obj.regionName}
                    imageUrl={obj.imageUrl}
                    countryCount={obj.countryCount}
                />
            )
                
            )
            }
        </div>

    )

}

export default RegionCardList